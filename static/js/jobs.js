const TAG_ACTIVE_CLASS = 'tag--active';
const SEARCH_HIDDEN_CLASS = 'search--hidden';
const CLOSE_TAG_CLASS = 'close-tag';
const TAG_CLASS = 'tag';

const jobsListings = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "../static/images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "https://in.indeed.com/jobs?q=front+end+developer&l=India&from=searchOnHP&vjk=4f5398a552c459bf",
    "languages": ["HTML", "CSS", "JavaScript"]
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "../static/images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "java",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "https://in.indeed.com/jobs?q=full+stack+developer+fresher&l=India&vjk=3cb40c237999e041",
    "languages": ["Python","javascript","HTML","CSS"],
    "tools": false
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "../static/images/account.svg",
    "new": true,
    "featured": false,
    "position": "Software Developer",
    "role": "Java",
    "level": "Problem solving",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "https://in.indeed.com/jobs?q=software+developer+fresher&l=India&vjk=f4feb077b7d0bfd0",
    "languages": [ "C","C++"],
    "tools": false
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "../static/images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Sales and Marketing",
    "role": "communication",
    "level": "verbal",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "https://in.indeed.com/jobs?q=sales+and+marketing&l=India&vjk=417681af468ab1ea",
    "languages": false
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "../static/images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Python Developer",
    "role": "Python",
    "level": "Flask",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "https://in.indeed.com/jobs?q=python+developer&l=India&vjk=2e9ed32cc1760a3d",
    "languages": ["Django"],
    "tools": false
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "../static/images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Data Entry part time",
    "role": "verbal",
    "level": "Typewriting",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "https://in.indeed.com/jobs?q=data+entry+work+from+home&l=India&vjk=793747715a5d2ace",
    "tools": false
  },
  {
    "id": 7,
    "company": "Accountant",
    "logo": "../static/images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior",
    "role": "Manager",
    "level": "Senior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "https://in.indeed.com/jobs?q=accountant&l=India&vjk=2c37f7ba31cbfa02",
    "languages": ["Executive", "Customer"],
    "tools": false
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "../static/images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Graduate Trainee",
    "role": "Freasher",
    "level": "Bachelor's degree",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "https://in.indeed.com/jobs?q=graduate+trainee&l=India&vjk=06523e22c62eb607",
    "languages": ["JavaScript"],
    "tools": ["Vue, Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "../static/images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Network Engineer",
    "role": "Networks",
    "level": "Security",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "https://in.indeed.com/jobs?q=network+engineer&l=India&vjk=630417a78ef327a6",
    "languages": ["Python"],
    "tools": false
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "../static/images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Work form Home",
    "role": "Content Creater",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "https://in.indeed.com/jobs?q=work+from+home&l=India&vjk=e17ac64219d5393d",
    "languages": ["Online"],
    "tools": false
  },
  {
    "id": 11,
    "company": "intel",
    "logo": "../static/images/Data.png",
    "new": false,
    "featured": false,
    "position": "Data Scientist",
    "role": "Fresher",
    "level": "Ruby",
    "postedAt": "1mo ago",
    "contract": "Full Time",
    "location": "https://in.indeed.com/jobs?q=data+scientist&l=India&vjk=a7f0dbee78cd16fa",
    "languages": ["Python"],
    "tools": false
    }

];

function getTagHTML(tag, tagClasses) {
    return `<span class="${tagClasses}">
                ${tag}
            </span>`;
}

function getJobListingHTML(jobData, filterTags = []) {
    const JOB_TAGS_PLACEHOLDER = '###JOB_TAGS###';
    let jobListingHTML = `
        <div class="jobs__item">
            <div class="jobs__column jobs__column--left">
                <img src="${jobData.logo}" alt="${jobData.company}" class="jobs__img" />
                <div class="jobs__info">
                    <span class="jobs__company">${jobData.company}</span>
                    <span class="jobs__title">${jobData.position}</span>
                    
                    <ul class="jobs__details">
                        <li class="jobs__details-item">${jobData.postedAt}</li>
                        <li class="jobs__details-item">${jobData.contract}</li>
                        <li class="jobs__details-item"><a href="${jobData.location}">APPLY NOW</a></li>
                    </ul>
                </div>
            </div>
            <div class="jobs__column jobs__column--right">
                ${JOB_TAGS_PLACEHOLDER}
            </div>
        </div>
    `;

    const tagsList = [
        jobData.role,
        jobData.level,
        ...(jobData.languages || []),
        ...(jobData.tools || [])
    ];
    const tagsListLowercase = tagsList.map(t => t && t.toLowerCase());
    const passesFilter = !filterTags.length || filterTags.every(tag => (
        tagsListLowercase.includes(tag && tag.toLowerCase())
    ));
    
    if (!passesFilter) {
        return '';
    }

    const tagsString = tagsList.reduce((acc, currentTag) => {
        const activeClass = (filterTags.includes(currentTag) && TAG_ACTIVE_CLASS) || '';

        return acc + getTagHTML(currentTag, `${TAG_CLASS} ${activeClass}`);
    }, '');

    return jobListingHTML.replace(JOB_TAGS_PLACEHOLDER, tagsString);
};

function toggleClass(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);

        return;
    }
    
    el.classList.add(className);
}

function getSearchBarTags(tagValue, searchContentEl) {
    let searchBarTags = Array.from(searchContentEl.children)
        .map(node => node.innerHTML && node.innerHTML.trim())
        .filter(tag => !!tag);

    if (searchBarTags.includes(tagValue)) {
        searchBarTags = searchBarTags.filter(tag => tag !== tagValue);
    } else {
        searchBarTags = [...searchBarTags, tagValue];
    }

    return searchBarTags;
}

function setJobsListings(filterTags) {
    const jobsListingsHTML = jobsListings.reduce((acc, currentListing) => {
        return acc + getJobListingHTML(currentListing, filterTags);
    }, '');
    
    document.getElementById('jobs').innerHTML = jobsListingsHTML;
}

function displaySearchWrapper(display = false) {
    const searchWrapper = document.getElementById('search');
    
    if (display) {
        searchWrapper.classList.remove(SEARCH_HIDDEN_CLASS);

        return;
    }

    searchWrapper.classList.add(SEARCH_HIDDEN_CLASS);
}

function setSearchbarContent(searchContentEl, tags) {
    searchContentEl.innerHTML = tags.reduce((acc, currentTag) => {
        return acc + getTagHTML(currentTag, CLOSE_TAG_CLASS);
    }, '');
}

function resetState(searchContentEl) {
    searchContentEl.innerHTML = '';

    setJobsListings();
    displaySearchWrapper(false);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
}

window.addEventListener('click', (event) => {
    const targetEl = event.target;
    const targetText = targetEl.innerHTML.trim();
    const searchContentEl = document.getElementById('search-content');
    const searchBarTags = getSearchBarTags(targetText, searchContentEl);

    if (targetEl.id === 'clear' || !searchBarTags.length) {
        resetState(searchContentEl);

        return;
    }

    if (![TAG_CLASS, CLOSE_TAG_CLASS].some(c => targetEl.classList.contains(c))) {
        return;
    }

    setSearchbarContent(searchContentEl, searchBarTags);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
    displaySearchWrapper(searchBarTags.length > 0);
    setJobsListings(searchBarTags);
});

setJobsListings();