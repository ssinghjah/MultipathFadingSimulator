var Constants = {};
Constants.InitialPhase = 0;
Constants.InitialNumVectors = 3;
Constants.InitialMag = 60;
Constants.InitialFreq = 1;
Object.freeze(Constants);

// Globals
var numVectors = Constants.InitialNumVectors;
var components = [];
var resultant;   
var animationInterval = 16;
var magType = "db";
var fadingThresholdPower = 80; // Power in dB ( scaled )
var dbScale = 3; // This is multiplied to the power in dB
var timeShiftSpeed = 1/4000;
var maxVolumePower = 160; // A power of maxVolume in dB gives maximum volume for the audio. This should be greater than the fading threshold
var zeroMagThreshold = 1 // If the cos component is less than 1 pixels, the magnitude is assumed to be 0
var fadingThresholdVoltage = Math.sqrt(Math.pow(10, fadingThresholdPower/(10*dbScale)));


