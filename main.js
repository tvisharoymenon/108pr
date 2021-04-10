Webcam.set({
    width:350,
    height:300,
    image_format:jpeg,
    jpeg_quality:100
});
camera = document.getElementById("camera");
Webcam.attach('#camera')
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LEQ31N0Tp/model.json',modelLoded);
function modelLoded(){
    console.log('modelLoded!');
}
function speak() {
    var synth = window.speechSythesis;
    speak_data1 = "The first prediction is ";
    speak_data2 = "The second prediction is ";
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);

}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(){
    if(){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
       if(results[0].label=="victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996"
        } 
        if(results[0].label=="best"){
            document.getElementById("update_emoji").innerHTML = "&#&#128077"
        } 
        if(results[0].label=="thumbs up"){
            document.getElementById("update_emoji").innerHTML = "&#128077"
        } 
        if(results[1].label=="victory"){
            document.getElementById("update_emoji2").innerHTML = "&#9996"
        } 
        if(results[1].label=="best"){
            document.getElementById("update_emoji2").innerHTML = "&#&#128077"
        } 
        if(results[1].label=="thumbs up"){
            document.getElementById("update_emoji2").innerHTML = "&#128077"
        } 
    }
}

 
    
    
