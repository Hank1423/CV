class Rat {
    constructor(name, weight, speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }

    makeNoise(){
        console.log("Chít chít");
    }
}



class Cat {
    constructor(name, weight, maxspeed) {
        this.name = name;
        this.weight = weight;
        this.maxspeed = maxspeed;
        this.mouseInventory = null;
    }

    makeNoise(){
        console.log("Meo meo");
    }

    catchRat(rat){
        if(this.mouseInventory !== null){
            console.log("Mèo đã bắt được 1 con chuột, không thể bắt thêm");
            return;
        }

        if(this.maxspeed > rat.speed){
            this.mouseInventory = rat;
            console.log("Mèo đã bắt được chuột");
        } else {
            console.log("Chuột chạy nhanh quá, bắt hụt mất rồi");
        }
    }

    eatRat(rat){
        if(this.mouseInventory === rat && rat.status === true){
            console.log("Mèo đang ăn chuột");
            this.weight += rat.weight;
            rat.status = false;
            this.mouseInventory = null;
        } else {
            console.log("Mèo không thể ăn chuột này");
        }
    }
}