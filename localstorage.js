var neumberCounter =1


saveData = function(){
    var DisplayCounter = document.getElementById('counter')
   
    localStorage.setItem("counter", 1)
    
    var currentValue =localStorage.getItem("counter")
    DisplayCounter.innerHTML =currentValue
    numberCounter++
}