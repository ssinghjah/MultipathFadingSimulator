var Constants = {};
Constants.InitialPhase = [0,0,0,0,0];
Constants.InitialNumVectors = 5;
Constants.InitialMag = [60,60,60,60,60];
Constants.InitialFreq = [-0.1,0.1,0.3,-0.4,-0.2];
Object.freeze(Constants);

// Globals
var numVectors = Constants.InitialNumVectors;
var components = [];
var resultant;   
var animationInterval = 16;
var magType = "db";
var fadingThreshold = 90; // Power in dB
var timeShiftSpeed = 1/4000;
var maxVolumePower = 110; // A power of maxVolume gives maximum volume for the audio. This should be greater than the fading threshold

