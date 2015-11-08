var addComponentUI = function(i){

    var component
    var componentRow = document.createElement("div");
    componentRow.setAttribute("class","row paddingTop");

    var componentColumn = document.createElement("div");
    componentColumn.setAttribute("class","col-md-12");

    var componentLabel = document.createElement("label");
    componentLabel.appendChild(document.createTextNode("Component " + (i + 1) + " :"));

    var magLabel = createLabel("Mag: ");
    var magInput = createInputTextBox("mag" + i, Constants.InitialMag);

    var phaseLabel = createLabel("Phase: ");
    var phaseInput = createInputTextBox("phase" + i, Constants.InitialPhase);

    var velocityLabel = createLabel("Freq: ");
    var velocityInput = createInputTextBox("velocity" + i, Constants.InitialVelocity);

    componentColumn.appendChild(componentLabel)
    componentColumn.appendChild(magLabel);
    componentColumn.appendChild(magInput);
    componentColumn.appendChild(phaseLabel);
    componentColumn.appendChild(phaseInput);
    componentColumn.appendChild(velocityLabel);
    componentColumn.appendChild(velocityInput);
    componentRow.appendChild(componentColumn);

    var componentDefinition = document.getElementById("componentDefinition");
    componentDefinition.appendChild(componentRow);
}


var hideEditor = function(){
    $('#editor').modal('hide');
}


