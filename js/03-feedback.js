import throttle from "lodash.throttle";

const KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener('submit', feedbackForm);
form.addEventListener('input', throttle(onInput,500));



const saveData = {};
function onInput(event){
    saveData[event.target.name]=event.targer.value;
    localStorage.setItem(KEY, JSON.stringify(saveData));
}

setInput();
function setInput(){
    let getInput = localStorage.getItem(KEY);
    if (getInput){
        getInput = JSON.parse(getInput);
        Object.entries(getInput).forEach(([name,value])=>{
            saveData[name]=value;
            form.elements[name].value = value;  
        });  
    
    }
}
function feedbackForm(event){
    event.preventDefault();
    const formData = new FormData (form);
    formData.forEach((value, name) =>
    console.log(`${name}`, value));
    event.targer.reset ();
    localStorage.removeItem(KEY);
}