var AudioManager = function(){

}

AudioManager.adjustVolume = function(){

	var audio = document.getElementById("audio");
	var powerDb = MagPlot.calculatePowerDb(resultant);
	var volume = (powerDb - fadingThreshold)/(maxVolumePower - fadingThreshold);
	volume = volume > 1 ? 1 : volume;
	volume = volume < 0 ? 0 : volume;
	audio.volume = volume;


}