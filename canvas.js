var myCanvas = document.getElementById("artboard")

var canvas = myCanvas.getContext("2d")

canvas.moveTo(0, 0)
//canvas.lineTo(400,400)
canvas.stroke()


//canvas.strokeText('hello canvas' ,100 ,100)

canvas.beginPath()
canvas.arc(200, 200, 100, 0, 360, false)
canvas.stroke()

//canvas.moveTo(225,225)
canvas.beginPath()
canvas.arc(170, 175, 10, 0, 360, false)
canvas.stroke()

canvas.beginPath()
canvas.arc(230, 175, 10, 0, 360, false)
canvas.stroke()

canvas.moveTo(200 , 200)
canvas.lineTo(200,230)
canvas.stroke()


canvas.beginPath()
canvas.arc(200, 255, 10, 0, Math.PI, false)
canvas.stroke()


canvas.beginPath()
canvas.arc(XMLDocument,y,50,0,360,false)
canvas.stroke()
x++
y++
if(x>400){
    x--
}
if(y>400){
    y--
}



