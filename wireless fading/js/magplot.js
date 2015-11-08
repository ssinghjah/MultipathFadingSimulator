function MagPlot(){
}


MagPlot.create = function(){

	this.height = canvasHeight;
	this.width = canvasWidth;
    this.timeShift = this.width/1600; // Move x coordinate by timeShift on each frame
    this.currentTime = 0; // Current time position
	this.svg = Raphael("magCanvas", this.width, this.height);
}


MagPlot.init = function(){
    this.initOrigin();
    this.initGeometry();
    this.initAxes();
}


MagPlot.initOrigin = function(){
		var circle = this.svg.circle( this.width/2, this.height/2, 4);
	    circle.attr("fill", "black");
	    circle.attr("stroke", "#fff");
	}

MagPlot.resize = function(){
	this.svg.clear();
	this.height = canvasHeight;
	this.width = canvasWidth;
	this.svg.setSize(this.width, this.height);
	this.init();
}

MagPlot.initAxes = function(){

    var yAxisPath = "M " + this.width/2 + "," + 0 + " L " + this.width/2 + "," + this.height;
    var yAxis = this.svg.path(yAxisPath);
    yAxis.attr({"stroke-width" : 1, 'arrow-end':  'classic-wide-long' , 'arrow-start':  'classic-wide-long' });

    var xAxisPath = "M " + 0 + "," + this.height/2 + " L " + this.width + "," + this.height/2;
    var xAxis = this.svg.path(xAxisPath);
    xAxis.attr({"stroke-width" : 1, 'arrow-end':  'classic-wide-long' , 'arrow-start':  'classic-wide-long' });

    this.currentTime = 0;
}

MagPlot.initGeometry = function(){

    // Clear prevoius points
    //this.prevComponentPoints = [];
    this.prevResPoint = {x:0,y:0};      
    //this.componentMags = [];
    // Create circles for each component
    //for(var i = 0; i < numVectors; i ++){
        
      //  this.componentMags[i] = this.svg.circle( this.width/2, this.height/2, 6);
       // this.componentMags[i].attr("fill", "black");
        //this.componentMags[i].attr("stroke", "#fff");
        //this.prevComponentPoints[i] = {x:0,y:0};
    //}

    // Create circles for resultant
    this.resultantMag = this.svg.circle( this.width/2, this.height/2, 6);
    this.resultantMag.attr("fill", "green");
    this.resultantMag.attr("stroke", "#fff");
    
    //
    this.magScale = 10;

    // Start from extreme left on the time axis
    this.currentTime = 0;
}

MagPlot.updateGeometry = function(){

    this.currentTime += this.timeShift;
    if(this.currentTime > this.width){
        this.currentTime = 0;
        this.svg.clear();
        this.init();
        return;
        // dont draw the trace back
    }

    this.currentTime %= this.width;
    
    //    for(var i = 0; i < numVectors; i ++)
    //  {
    //    MagPlot.updateMag(vectors[i], this.componentMags[i], this.prevComponentPoints[i], "black");
    // }

    MagPlot.updateMag(resultant, this.resultantMag, this.prevResPoint, "green");
}


MagPlot.updateMag = function(vector, magPoint, prevPoint, color){

   
    var mag;
    if (magType === "db")
    {
        var resultant = vector.getTotalLength();
        var power = resultant * resultant;
        var powerDb = Math.log(power) / Math.log(10);
        mag = powerDb;
        this.magScale = 10;
    }
    else if (magType === "linear")
    {
        var cosComponent = vector.xshift - Math.round(vector.matrix.x(vector.head[0], vector.head[1]));
        mag = cosComponent;
        this.magScale = 1;
    }
    
    if (Math.abs(mag * this.magScale) > this.height / 2) {
        this.magScale = this.height / (2 * Math.abs(mag));
    }

    mag = this.height / 2 - mag * this.magScale;
    magPoint.attr({ "cx": this.currentTime, "cy": mag });

    var line = this.svg.path(["M", prevPoint.x, prevPoint.y, "L", this.currentTime, mag]);
    line.attr("stroke", color)
    
    prevPoint.x = this.currentTime;
    prevPoint.y = mag;
}
