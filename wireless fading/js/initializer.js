window.onload = function() {
    
    if( numVectors <= 0)
        return;
    initialize(); 
    startAnimation();
}


var initialize = function(){
    
    initHeightWidth();
    initSVG();
    initEventWiring();
    initVectorsUI();
    PhasorPlot.init();
    MagPlot.init();
      
}


var reinit = function(event){

    stopAnimation();
    initHeightWidth();
    resizeSVG();
    PhasorPlot.init();
    MagPlot.init();
    startAnimation();
}


var initHeightWidth = function(){

    var canvas = document.getElementById("phasorPlot");
    var footerHeight = $(".footer").height();
    canvasHeight = canvas.offsetHeight - 60 - footerHeight;
    canvasWidth = canvas.offsetWidth - 5;
    $(".footer").width($(window).width() - 8);
}

var initSVG = function(){

    PhasorPlot.create();
    MagPlot.create();
}


var initEventWiring = function(){

    window.onresize = reinit;
    document.getElementById("numComponentsButton").addEventListener("click",  onUpdateNumComponents, false);
    document.getElementById("numComponents").addEventListener("keyup",  onNumComponentsKeyUp, false);
    document.getElementById("run").addEventListener("click", onEdit , false);
    document.getElementById("toggleAudio").addEventListener("click", onToggleAudio , false);
    document.addEventListener("keyup", onKeyUp, false);
    $('#editor').on('hidden.bs.modal', onHideEditor);
    document.getElementById("toggleMagnitude").addEventListener("click", onToggleMagnitude, false);
    $("#toggleMagType").change(onToggleMagType);
  
}


var initVectorsUI = function(){
    for(var i = 0; i < numVectors; i++){
        addComponentUI(i);
    }

}

var resizeSVG = function(){
    PhasorPlot.resize();
    MagPlot.resize();
}





