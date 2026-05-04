class Remote {
    constructor(id) {
        this.id = id;
    }

    controlChannel(tivi, channel) {
        tivi.setChannel(channel);
    }

    controlVolume(tivi, volume) {
        tivi.adjustVolume(volume);
    }

    controlStatus(tivi) {
        tivi.toggleStatus();
    }
}

class Tivi {
    constructor() {
        this.channel = 1;
        this.volume = 30;
        this.status = false;
    }

    toggleStatus() {
        this.status = !this.status;
        console.log(this.status ? "Tivi đã BẬT" : "Tivi đã TẮT");
    }

    setChannel(channel) {
        if (this.status) {
            this.channel = channel;
            console.log(`Kênh hiện tại: ${this.channel}`);
        } else {
            console.log("Tivi đang tắt, không thể chuyển kênh!");
        }
    }

    adjustVolume(amount) {
        if (this.status) {
            this.volume += amount;
            console.log(`Âm lượng hiện tại: ${this.volume}`);
        } else {
            console.log("Tivi đang tắt, không thể chỉnh âm lượng!");
        }
    }
}