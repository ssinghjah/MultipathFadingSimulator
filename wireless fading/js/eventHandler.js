var onUpdateNumComponents = function(event){
    event.stopPropagation();
    stopAnimation();
    emptyElement("componentDefinition");
    numVectors = getTextBoxValue("numComponents");
    for( var i = 0; i < numVectors; i++)
    {
        addComponentUI(i);
    }
}

var onNumComponentsKeyUp = function(event){
  if (event.keyCode == 13){
    onUpdateNumComponents(event);
  }
}

var onEdit = function(){

      hideEditor();
      reinit();
}


var onHideEditor = function(){
    if(isAnimationStopped())
      reinit();
}


var onKeyUp = function(event){

     if (event.keyCode == 13 && event.target.id !== "numComponentsButton") {
        hideEditor();
        reinit();
    }
}

var magPlotVisible = false;
onToggleMagnitude = function( show){
  if(!magPlotVisible){
      magPlotVisible = true;
      $("#magPlot").show();
      $("#phasorPlot").removeClass("col-md-12").addClass("col-md-6");
  }
  else{
      magPlotVisible = false;
      $("#magPlot").hide();
      $("#phasorPlot").removeClass("col-md-6").addClass("col-md-12");
  }
  reinit();
}

onToggleMagType = function () {
    var magTypeElem = document.getElementById('toggleMagType');
    if (magTypeElem.checked)
        magType = "db";
    else
        magType = "linear";
    reinit();
  
}
