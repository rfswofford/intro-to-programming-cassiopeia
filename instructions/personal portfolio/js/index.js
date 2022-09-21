
//define date
const today = new Date(); 
const thisYear = today.getFullYear();

//select the footer
const footer = document.querySelector('footer'); 

//create the copyright text
const copyright = document.createElement('p');
copyright.innerHTML = 'Rebecca Swofford ' + thisYear; 

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