let myTivi = new Tivi();
let myRemote = new Remote("1"); 
myTivi.toggleStatus();       
myTivi.setChannel(7);         
myRemote.controlChannel(myTivi, 3); 
myTivi.adjustVolume(2);          
myRemote.controlStatus(myTivi);  