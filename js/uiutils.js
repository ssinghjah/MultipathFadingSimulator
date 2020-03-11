function isHidden(el) {
    return (el.offsetParent === null)
}


var getTextBoxValue = function(id){

    var value = document.getElementById(id).value;  
    value = Number(value);
    if( !isNaN(value))
        return value;   
    else
        return null;
}

var emptyElement = function(id)
{
    var element = document.getElementById(id);
    while (element.hasChildNodes()) 
    {
        element.removeChild(element.lastChild);
    }
}

var createLabel = function( labelText){

    var label = document.createElement("label");
    label.setAttribute("class","paddingLeft");
    label.appendChild(document.createTextNode(labelText + " "));
    return label;
}

var createInputTextBox = function( id, value){

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id", id);
    input.setAttribute("class", "marginLeft");
    input.setAttribute("value", value);
    return input;

}
