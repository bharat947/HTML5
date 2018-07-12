var inputValue = document.getElementById("taskValueId")
var counter = 1

addTask = function(){

    if(localStorage.getItem("taskCounter") === null){
        localStorage.setItem("taskCounter",counter)
    }else{
      counter = localStorage.getItem("taskCounter")  
    }

    var currentTask = inputValue.value
    console.log("saving the task to local storage")
    localStorage.setItem("task_" + counter, currentTask)
    inputValue.value =""
   // counter++
   localStorage.setItem("taskCounter", ++counter)
   loadTask()
}


function loadTask(){
    console.log("loading task in the view")
    var container =document.getElementById("taskContainer")
    container.innerHTML = ""
    
    var newul = document.createElement("ol")
    document.getElementById("taskContainer").appendChild(newul)

    var maxCounter = localStorage.getItem("taskCounter")
    for(var i=0; i<maxCounter; i++){
        var newli = document.createElement("li")
        var currentTask = localStorage.getItem("task_" + i)
        newli.innerHTML = currentTask
        newul.appendChild(newli)
    }
        

}

loadTask()