var Constants = {};
Constants.InitialPhase = [0,0,0,0];
Constants.InitialNumVectors = 4;
Constants.InitialMag = [60,60,60,60];
Constants.InitialFreq = [-0.3,0.5,0.5,-0.3];
Object.freeze(Constants);

// Globals
var numVectors = Constants.InitialNumVectors;
var components = [];
var resultant;   
var animationInterval = 16;
var magType = "db";
var fadingThreshold = 70; // Power in dB
var timeShiftSpeed = 1/4000;
var maxVolumePower = 140; // A power of maxVolume gives maximum volume for the audio. This should be greater than the fading threshold
var zeroMagThreshold = 1 // If the cos component is less than 1 pixels, the magnitude is assumed to be 0
