var Constants = {};
Constants.InitialPhase = [0,0,0,0,0];
Constants.InitialNumVectors = 5;
Constants.InitialMag = [60,60,60,60,60];
Constants.InitialFreq = [-1,1,3,-0.4,-3.2];
Object.freeze(Constants);

// Globals
var numVectors = Constants.InitialNumVectors;
var components = [];
var resultant;   
var animationInterval = 16;
var magType = "db";
var fadingThreshold = 3; // Power in dB
timeShiftSpeed = 1/4000;

