function dragStartNow(e){
    console.log("on drag event it called")
    e.dataTransfer.setData("sourceId", e.target.id)
}


function dragOverNow(e){
    e.preventDefault()
    console.log("I am darging on div 2")
}

function dropNow(e){
    e.preventDefault()
    console.log("i am being dropped on div 2")
    var temp = e.dataTransfer.getData("sourceId")
    console.log("____________")
    console.log(temp)
    var tempImg = document.getElementById(temp)
    e.target.appendChild(tempImg)

}

sourceDragOver =function(e){
    e.preventDefault()
}

sourceDrop =function(e){
    e.preventDefault()
    var temp = e.dataTransfer.getData("sourceId")
    var tempImg = document.getElementById(temp)
    e.target.appendChild(tempImg)
}