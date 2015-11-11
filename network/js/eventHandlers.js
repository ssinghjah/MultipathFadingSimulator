var onSaveParameters = function(){
	
	SETTINGS.FrameSlot = parseFloat(document.getElementById('frameSlot').value); //milli seconds
	SETTINGS.InterNodeDistance = parseFloat(document.getElementById('simDuration').value); // In bytes
	SETTINGS.TransmissionRate = parseFloat(document.getElementById('transmissionRate').value); // In Mbps
	SETTINGS.MeanInterPacket = parseFloat(document.getElementById('packetInterArrival').value);

}