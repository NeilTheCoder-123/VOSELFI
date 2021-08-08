var speech_recog = window.webkitSpeechRecognition;

var recog = new speech_recog();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recog.start();
}
recog.onresult = function(event){
    var content = event.results[0][0].transcript;
    console.log(event);
    if (content == "take my selfie"){
        console.log("taking selfie....");
        speak();
    }
    document.getElementById("textbox").innerHTML = content;
}

function speak(){
    var synth = window.speechSynthesis;

    for (index = 5; index > 0; index--) {
        speak_data = index;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }

    
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    },
    5000
    );
}

function take_snapshot() { 
    Webcam.snap(function(data_uri) { 
        document.getElementById("output").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    }); 
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    quality: 100
});
camera = document.getElementById("webcam");

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

function backtohome(){
    window.location = "index.html";
  }