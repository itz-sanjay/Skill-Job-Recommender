import requests
import json
# mention url
url = "https://www.fast2sms.com/dev/bulkV2"



# create a dictionary


# create a dictionary
headers = {
 'authorization': 'iN19Ocs5q6Qydfha4Y7BGpvTPDrgmCuKXnMUJkej3tw28RlxEocOKswaQIjrGT6tuRCpfiZkD1lWNPJU',
 'Content-Type': "application/x-www-form-urlencoded",
 'Cache-Control': "no-cache"
}


my_data = {
     # Your default Sender ID
     'sender_id': 'FTWSMS',
 
     # Put your message here!
     'message': 'Argent.....There is a demand for your blood group. We request you to donate your blood in your nearby BloodBank connect with our Organization.',
 
     'language': 'english',
     'route': 'p',
 
     # You can send sms to multiple numbers
     # separated by comma.
        
      'numbers': '9344610388'
        }
response = requests.request("POST",
       url,
       data = my_data,
       headers = headers)
        #load json data from sourc
returned_msg = json.loads(response.text)

        # print the send message
print(returned_msg['message'])