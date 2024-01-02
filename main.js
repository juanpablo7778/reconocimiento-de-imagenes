Webcam.attach('#camara');
camara=document.getElementById("camara");
Webcam.set(
    {
        width:350, 
        height:300,image_format:'png', png_quality:90
    }
);
function capturar_imagen() {
Webcam.snap(function(data_uri)
{
    document.getElementById("resultado").innerHTML='<img id="capturar_imagen" src="'+ data_uri+'"/>';

});    
}
console.log('ml5 version:', ml5.version );
clasificación= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pf0qgXVzd/model.json', modelocargado);
function modelocargado(){
   console.log('modelo cargado');
}
