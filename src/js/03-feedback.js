import throttle from "lodash.throttle"

const feedbackForm = document.querySelector(".feedback-form")

feedbackForm.addEventListener("input", onInputChange)
feedbackForm.addEventListener('submit', onSubmit)



function save(key, value){
    try{
        localStorage.setItem(key, JSON.stringify(value))
        
    }
    catch(error){
        console.log(error.message);
    }
    
}

function load(key){
    try{
        const saveData = localStorage.getItem(key)
    return saveData === null ? undefined : JSON.parse(saveData)
    }
    catch(error){
        console.log(error.message);
    }
}

function onInputChange(evt){
const data = {email: evt.currentTarget.elements.email.value.trim(), message:evt.currentTarget.elements.message.value.trim() }
throttle(save,500)
save('feedback-form-state', data)
}



function onSubmit(evt){
    evt.preventDefault()
    console.log(load("feedback-form-state"))
localStorage.removeItem("feedback-form-state")
evt.currentTarget.reset()
}
const parseData = load("feedback-form-state")

 function update (){
        feedbackForm.elements.email.value = parseData.email
        feedbackForm.elements.message.value = parseData.message
    }
if (parseData) {
      update()
}

