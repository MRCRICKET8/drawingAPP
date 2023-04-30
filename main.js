function draw(){
    strokeWeight(23);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function check_sketch{

}
function update_canvas(){
    Math.floor(quick_draw_data_set)
    console.log()
}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function clearCanvas(){
    background("white");
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }   
    console.log(results);
    document.getElementById('label').innerHTML = 'Label :'+ results[0].label;
    document.getElementById('confidence').innerHTML = 'Confidence :'+ Math.round(results[0].confidence*100) + '%';
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
    }
    