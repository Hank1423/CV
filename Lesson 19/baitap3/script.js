class ElectricLamp {
    constructor() {
        this.status = false;
    }

    turnOff(){
        this.status = false;
        console.log("Bóng đèn: Tắt");
    }

    turnOn(){
        this.status = true;
        console.log("Bóng đèn: Sáng");
    }
}

class SwitchButton{
    constructor(){
        this.status = false;
        this.lamp = null;
    }

    connectToLamp(electricLamp){
        this.lamp = electricLamp;
    }

    switchOn(){
        this.status = true;
        if (this.lamp !== null){
            this.lamp.turnOn()
        }
    }

    switchOff(){
        this.status = false;
        if (this.lamp !== null){
            this.lamp.turnOff()
        }
    }
}

let đèn = new ElectricLamp();
let côngtắc = new SwitchButton();

côngtắc.connectToLamp(đèn);

for (i=0; i <= 10; i++){
    console.log(`--- Lần bấm thứ ${i} ---`);

    côngtắc.switchOn();
    côngtắc.switchOff();
}