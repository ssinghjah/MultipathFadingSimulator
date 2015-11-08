
function PhasorPlot(){
	this.svg;

}

PhasorPlot.create = function(){
	this.svg = Raphael("phasorCanvas", canvasWidth, canvasHeight);
}

PhasorPlot.init = function(){
    
    this.initAxes();
    this.initOrigin();
    this.initVectors();
}


PhasorPlot.resize = function(){
    this.svg.clear();
	this.svg.setSize(canvasWidth, canvasHeight);
}

PhasorPlot.initAxes = function(){
    var yAxisPath = "M " + (canvasWidth/2) + "," + 0 + " L " + (canvasWidth/2) + "," + canvasHeight;
    var yAxis = this.svg.path(yAxisPath);
    yAxis.attr({"stroke-width" : 1, 'arrow-end':  'classic-wide-long' , 'arrow-start':  'classic-wide-long' });

    var xAxisPath = "M " + 0 + "," + (canvasHeight/2) + " L " + canvasWidth + "," + (canvasHeight/2);
    var xAxis = this.svg.path(xAxisPath);
    xAxis.attr({"stroke-width" : 1, 'arrow-end':  'classic-wide-long' , 'arrow-start':  'classic-wide-long' });
}

PhasorPlot.initOrigin = function(){

        var circle = this.svg.circle( canvasWidth/2, canvasHeight/2, 4);
        circle.attr("fill", "black");
        circle.attr("stroke", "#fff");
    }

PhasorPlot.initVectors = function(){

	if( numVectors <= 0)
        return;
    
    // clear all previous vectors
    vectors = [];

    // create first vector
    var mag, velocity, phase, x, y;

    mag = getTextBoxValue("mag0");
    velocity = getTextBoxValue("velocity0");
    phase = getTextBoxValue("phase0")*(-1);
    x = canvasWidth/2;
    y = canvasHeight/2;
    var path = "M " + x + "," + y + " L " + (canvasWidth/2 + mag) + "," + canvasHeight/2;
    vectors[0] = this.svg.path(path);
    vectors[0].velocity = velocity;
    vectors[0].mag = mag;
    vectors[0].head = [canvasWidth/2 + vectors[0].mag, canvasHeight/2 ];
    vectors[0].attr({ 'arrow-end':  'block-wide-long',"stroke-width" : 2 });
    vectors[0].phase = phase;
    vectors[0].rotate(vectors[0].phase, x, y);

    // create all other vectors
    var  prev;
    for(var i = 1; i < numVectors; i++)
    {   
        prev = vectors[i-1];
        mag = getTextBoxValue("mag" + i);
        velocity = getTextBoxValue("velocity" + i);
        phase = getTextBoxValue("phase" + i);

        x = prev.matrix.x(prev.head[0],prev.head[1]);
        y = prev.matrix.y(prev.head[0],prev.head[1]);
        
        path = "M " + x + "," + y + " L " + ( x + mag) + "," + y;  
        vectors[i] = this.svg.path(path);

        vectors[i].velocity = velocity;
        vectors[i].mag = mag;
        vectors[i].phase = phase;
        vectors[i].head = [x + mag, y];
        vectors[i].attr({ 'arrow-end':  'block-wide-long', "stroke-width" : 2 });
        vectors[i].rotate(vectors[i].phase, x, y);    
    }
    
    // create resultant vector
    var last = vectors[numVectors-1];
    x = last.matrix.x(last.head[0],last.head[1]);
    y = last.matrix.y(last.head[0],last.head[1]);
    path = "M " + canvasWidth/2  + "," + canvasHeight/2 + " L " + x  + "," + y;
    resultant = this.svg.path(path);
    resultant.attr({stroke:"green", "stroke-width" : 3, 'arrow-end':  'block-wide-long' });
}

PhasorPlot.updateGeometry = function(){

        // update first vector
        vectors[0].rotate( -vectors[0].velocity, canvasWidth/2, canvasHeight/2);
        vectors[0].xshift = canvasWidth/2;

        // update other vectors
        for(var i = 1; i < numVectors; i++){
            PhasorPlot.updateVector(i);
        }

        // update resultant
        PhasorPlot.updateResultant();
}

PhasorPlot.updateResultant = function(){

        var last = vectors[numVectors-1];
        var x = Math.round(last.matrix.x(last.head[0],last.head[1]));
        var y = Math.round(last.matrix.y(last.head[0],last.head[1]));
        var path = "M " + canvasWidth/2  + "," + canvasHeight/2 + " L " + x  + "," + y;
        resultant.attr( { path : path});
        // set head
        resultant.head = [x,y];
        resultant.xshift = canvasWidth/2;        
    }


PhasorPlot.updateVector = function(index){

    var vector = vectors[index];
    var prev = vectors[index - 1];

    // move to head of prev vector
    var x = prev.matrix.x(prev.head[0],prev.head[1]);
    var y = prev.matrix.y(prev.head[0],prev.head[1]);
    vector.xshift = x;
    var path = "M " + x + "," + y + " L " + ( x + vector.mag ) + "," + y;
    vector.attr( { path : path});     
    
    // rotate
    vector.phase += vector.velocity;
    vector.phase = vector.phase > 360  ? vector.phase - 360 : vector.phase; 
    vector.transform("");
    vector.rotate(-vector.phase, x, y);      

    // set head
    vector.head = [x + vector.mag, y];
}


   