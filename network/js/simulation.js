var bus = new Bus("bus1");
var sim;
var nodes = [];
var log = [];

function Simulate(){
    
    clearResults();
    sim = new Sim();
    clearNodes();    
    createNodes();
    createBus();
    initSim();
    sim.simulate(SETTINGS.SimTime);
    displayResults(); 
    //new RandomTester().run();
}


function createBus(){
    bus = sim.addEntity(bus);
}


function clearResults(){

    $("#results").hide();
    var element = document.getElementById("results");
    while (element.hasChildNodes()) 
    {
        element.removeChild(element.lastChild);
    }
    log = [];
}


function clearNodes(){
    nodes = [];
}

function createNodes(){

    var numNodes = 2;

    var nodeA = new Node(0, "A", 0);
    var nodeB = new Node(1, "B", 2000);
    var nodeC = new Node(2, "C", 4000);
    var nodeD = new Node(3, "D", 6000);

    nodes.push(nodeA);
    nodes.push(nodeB);
    //nodes.push(nodeC);
    //nodes.push(nodeD);

    for(var i = 0; i < numNodes; i++)
    {
        nodes[i] = sim.addEntity(nodes[i]);
    }
}


function initSim(){

    sim.setLogger(function (str) {
       log.push({"Time":sim.time(),"Message":str});
    });
}
