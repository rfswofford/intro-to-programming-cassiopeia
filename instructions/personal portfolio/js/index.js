
//define date
const today = new Date(); 
const thisYear = today.getFullYear();

//select the footer
const footer = document.querySelector('footer'); 

//create the copyright text
const copyright = document.createElement('p');
copyright.innerHTML = 'Rebecca Swofford ' + thisYear; 
copyright.className = 'footer';

//add copyright text to 
footer.appendChild(copyright); 

//array of my skills for the skills section
const skills = ["JavaScript", "HTML", "collaboration", "team facilitation", "trainer for adult learners", "supervision skills", "program management", "customer service", "strong communication skills", "event planning"]; 

//selecting skills section
const skillsSection = document.querySelector('#skills'); 

//find and select <ul> from skills section 
const skillsList= skillsSection.querySelector('ul'); 

//iterate through skills array creating new list items for the skills section
for (let i=0; i< skills.length; i++){
    const skill=document.createElement ('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//selecting message form
const messageForm = document.querySelector('[name="leave_message"]');

//submitting form event
const submission= messageForm.addEventListener('submit',formSubmit)

//callback function for event listener which takes entry date from form, and creates a new list item under messages and adds a remove button
function formSubmit(evt) {
    evt.preventDefault();
    const name= evt.target[0].value;
    const email= evt.target[1].value;
    const message= evt.target[2].value;
    console.log(name + email + message);

    const messageSection= document.querySelector('#messages'); 
    const messageList= messageSection.querySelector ('ul'); 
    let newMessage = document.createElement('li'); 
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a> <span> ${message}</span>`;
    let removeButton = document.createElement('button'); 
    removeButton.innerText= 'Remove'; 
    removeButton.type= 'button'; 
    removeButton.addEventListener('click', buttonRemoval); 
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    document.querySelector ("[name='leave_message'").reset();
}


//function to remove button
function buttonRemoval (evt){
    evt.target.parentNode.remove(); 
    
}

//connect to XML
/*let githubRequest = new XMLHttpRequest; 

//open github repository url
githubRequest.open('GET', 'https://api.github.com/users/rfswofford/repos'); 

githubRequest.send(); 

//when it load it takes the JSON data from the url
githubRequest.onreadystatechange = function (){
   if (githubRequest.readyState === XMLHttpRequest.DONE && githubRequest.status==200){
        let repositories = JSON.parse(githubRequest.responseText); 
        console.log(repositories);
        //DOM selection of projects section and then projects list

        const projectSection = document.querySelector('#projects');

        const projectList = projectSection.querySelector('ul'); 

        for(i=0; i<repositories.length; i++){
            const project = document.createElement ('li'); 
            project.innerHTML = `<a href="${repositories[i].html_url}" > ${repositories[i].name} </a>`; 
            projectList.appendChild (project); 
        }
    }
}*/


fetch ('https://api.github.com/users/rfswofford/repos')
    .then (response => response.json())
    .then (showApiData =>{
        const projectSection = document.querySelector('#projects');
        const projectList = projectSection.querySelector('ul');

        for (i=0; i<showApiData.length;i++){
            const project = document.createElement ('li'); 
            project.innerHTML = `<a href="${showApiData[i].html_url}" > ${showApiData[i].name} </a>`; 
            projectList.appendChild (project); 
        }
        })
    .catch (function(error){ 
        console.log('unable to load git hub api', error)
        let errorItem = document.createElement('li');
        errorItem.innerHTML = 'There has been an error. Unable to load repositories. Please, try again later';
        projectList.appendChild (errorItem);
    })
    