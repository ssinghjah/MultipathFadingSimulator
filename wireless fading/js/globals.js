
var Constants = {};
Constants.InitialMag = 60;
Constants.InitialPhase = 0;
Constants.InitialVelocity = 1;
Constants.InitialNumVectors = 3;
Object.freeze(Constants);

// Globals
var canvasHeight = 500;
var canvasWidth = 500;
var numVectors = Constants.InitialNumVectors;
var vectors = [];
var resultant;   
var animationInterval = 16;
var setIntervalId = -1;
var svg;
var sineSvg;
var sinePoint;

