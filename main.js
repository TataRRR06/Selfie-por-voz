var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.result[0][0].transcript;
document.getElementById("textbox").innerHTML=Content;
console.log(Content);
if(Content=="toma mi selfie"){
    console.log("tomando tu selfie en 5 segundos")
speak();
}
}

function speak(){
    var Synth=window.speechSynthesis;
    speak_data="tomando tu selfie en 5 segundos";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
save();
    },5000);

}

Webcam.set({
    width:300,
    height:400,
    image_format:'png',
    png_quality:60
});
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
link.click();
}
