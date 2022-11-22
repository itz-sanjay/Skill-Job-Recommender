from flask import Flask, render_template,url_for,redirect,request,session,flash
import ibm_db
from markupsafe import escape
import requests
import json

url = "https://www.fast2sms.com/dev/bulkV2"

headers = {
 'authorization': 'iN19Ocs5q6Qydfha4Y7BGpvTPDrgmCuKXnMUJkej3tw28RlxEocOKswaQIjrGT6tuRCpfiZkD1lWNPJU',
 'Content-Type': "application/x-www-form-urlencoded",
 'Cache-Control': "no-cache"
}

app = Flask(__name__)
app.secret_key = '32y[wld,fnpsygfwfpwek2;]1[2'
conn = ibm_db.pconnect('DATABASE=bludb;HOSTNAME=824dfd4d-99de-440d-9991-629c01b3832d.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;PORT=30119;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=nqd11011;PWD=mNBpZbVZbyAeu6dN',' ',' ')
print(conn)
print("connection successful...")


@app.route('/')
def home():
    message = "TEAM ID : PNT2022TMID12441" +" "+ "BATCH ID : B6-6M2E "
    return render_template('index.html')

@app.route('/login', methods=['GET','POST'])
def login():
    return render_template('login.html')

@app.route('/register', methods = ['GET','POST'])
def register():
    return render_template('register.html')

@app.route('/studentdashboard', methods = ['GET','POST'])
def studentdashboard():
    return render_template('Stdash.html')

@app.route('/changepass', methods = ['GET','POST'])
def changepass():
    return render_template('changepass.html')



@app.route('/register_student', methods=['GET', 'POST'])
def register_student():
    if request.method == 'POST':
        name = request.form["Nm"]
        email = request.form["email"]
        phonenumber = request.form['PhNo']
        password = request.form['pass']
            
        sql = "SELECT * FROM student1 WHERE email = ?"
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(stmt, 1, email)
        ibm_db.execute(stmt)
        account = ibm_db.fetch_assoc(stmt)

        if account:
            flash("Record Aldready found")
            return  redirect(url_for('register'))
        
        else:
            insert_sql = "insert into student1(name,email,phoneno,password)values(?,?,?,?)"
            prep_stmt = ibm_db.prepare(conn, insert_sql)
            ibm_db.bind_param(prep_stmt, 1, name)
            ibm_db.bind_param(prep_stmt, 2, email)
            ibm_db.bind_param(prep_stmt, 3, phonenumber)
            ibm_db.bind_param(prep_stmt, 4, password)
            ibm_db.execute(prep_stmt)
            Ph1 = phonenumber
            my_data = {
                'sender_id': 'Skill/Job recommender',
                'message': 'Hii, Your ID successfully created.Explore your skills and Grab your job.',
                'language': 'english',
                'route': 'p',
                'numbers': {escape(phonenumber)}
                }
            response = requests.request("POST",url,data = my_data,headers = headers)
            returned_msg = json.loads(response.text)
            print(returned_msg['message'])
            return redirect(url_for('login'))

@app.route('/login_student', methods=['GET', 'POST'])
def login_student():
    if request.method == 'POST':
        mail = request.form["em"]
        password = request.form["pass"]
        sql = f"select * from student1 where email='{escape(mail)}' and password='{escape(password)}'"
        stmt = ibm_db.exec_immediate(conn, sql)
        data = ibm_db.fetch_both(stmt)

            
        if data:
            session["em"] = escape(mail)
            session["password"] = escape(password)
            return redirect(url_for("studentdashboard"))

        else:
            flash('You have entered worng password or email')
            return redirect(url_for("login"))

@app.route('/forget', methods=['GET', 'POST'])
def forget():
    if request.method == 'POST':
        cm = request.form["Email"]
        cp = request.form["oldpassword"]
        co = request.form["newpass"]
        sql = f"select * from student1 where email='{escape(cm)}' and password='{escape(cp)}'"
        stmt = ibm_db.exec_immediate(conn, sql)
        data = ibm_db.fetch_both(stmt)

        if data:
            session["Email"] = escape(cm)
            session["oldpassword"] = escape(cp)
            sql = "UPDATE student1   SET password= ? WHERE email = ?"
            stmt = ibm_db.prepare(conn,sql)
            ibm_db.bind_param(stmt,1,co)
            ibm_db.bind_param(stmt,2,cm)
            ibm_db.execute(stmt)
            flash("You Password is changed successfully")
            return redirect(url_for('login'))
        else:
            flash('You old password is wrong')
            return redirect(url_for("changepass"))


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)