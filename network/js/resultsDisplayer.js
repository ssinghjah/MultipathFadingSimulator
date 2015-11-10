displayResults = function( nodeAPackets, nodeBPackets){

    var numNodes = nodes.length;
    var values,label;

    createSummary();

    for(var i=0; i<numNodes; i++)
    {
        values = $.map(nodes[i].packets, function(packet){return packet.interArrivalTime;});
        label = "Node " + nodes[i].name + ": Packet Inter Arrival Times (ms)";
        createBarGraph(values,label);
        createHistogram(values, label + " Histogram", 20);
    }   


    for(var i=0; i<numNodes; i++)
    {
        var packetsDelivered = $.grep(nodes[i].packets, function( packet ) {return packet.rxTime > 0;});
        if(packetsDelivered.length > 0){
            values = $.map(packetsDelivered, function(packet){return packet.txTime - packet.birthTime;});
            label = "Node " + nodes[i].name + ": Queue Delay (ms)";
            createBarGraph(values, label);
            createHistogram(values, label + " Histogram", 20);
        }
    }   


    for(var i=0; i<numNodes; i++)
    {
        var packetsDelivered = $.grep(nodes[i].packets, function( packet ) {return packet.rxTime > 0;});
        if(packetsDelivered.length > 0){
            values = $.map(packetsDelivered, function(packet){return packet.rxTime - packet.birthTime;});
            createHistogram(values, "Node " + nodes[i].name + ": End to End Delay (ms)", 20);
        }
    } 

    createEventLog();

    $("#results").show();  
}

// Common Stuff

var addStatisticsCell = function(){

 var statisticsArea = d3.select("#results");
 var statisticsCell = statisticsArea.append("div").attr({"class":"row paddingTop"}).append("div").attr({"class":"col-md-12"});
 return statisticsCell;
}

var margin = {top: 10, right: 30, bottom: 50, left: 70},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;