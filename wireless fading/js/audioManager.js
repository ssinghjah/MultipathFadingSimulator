var AudioManager = function(){

}



AudioManager.adjustVolume = function(){

	var audio = document.getElementById("audio");	
	var powerDb = MagPlot.calculatePowerDb(resultant);
	var volume = (powerDb - fadingThresholdPower)/(maxVolumePower - fadingThresholdPower);
	volume = volume > 1 ? 1 : volume;
	volume = volume < 0 ? 0 : volume;
	audio.volume = volume;

}

AudioManager.toggleAudio = function(){
	var audio = document.getElementById("audio");	
	if($("#toggleAudio span").hasClass("glyphicon-play")){
		$("#toggleAudio span").removeClass("glyphicon-play").addClass("glyphicon-pause");
		audio.play();
	}
	else{
		$("#toggleAudio span").removeClass("glyphicon-pause").addClass("glyphicon-play");
		audio.pause();
	}
}