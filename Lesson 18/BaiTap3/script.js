class Mobile {
    constructor() {
        this.pin = 100;
        this.tinDangSoan = "";
        this.inbox = [];
        this.tinDaGui = [];
        this.trangThai = false;
    }

    suDungPin() {
        this.pin--;
        if (this.pin <= 0) {
            this.pin = 0;
            this.trangThai = false;
        }
        updateDisplay();
    }

    batMay() {
        if (this.pin > 0) {
            this.trangThai = true;
            this.suDungPin();
        }
    }

    tatMay() {
        this.trangThai = false;
        updateDisplay();
    }

    soanTinNhan(noidung) {
        if (this.trangThai) {
            this.tinDangSoan = noidung;
            this.suDungPin();
        }
    }

    guiTinNhan(thietBiNhan) {
        if (this.trangThai) {
            thietBiNhan.inbox.push(this.tinDangSoan);
            this.tinDaGui.push(this.tinDangSoan);
            this.tinDangSoan = "";
            this.suDungPin();
        }
    }

    sacPin() {
        while (this.pin < 100) {
            this.pin++;
        }
        updateDisplay();
    }
}

let nokia = new Mobile();
let iphone = new Mobile();

function updateDisplay() {
    document.getElementById('pin-nokia').innerText = nokia.pin + "%";
    document.getElementById('pin-iphone').innerText = iphone.pin + "%";

    const screenN = document.getElementById('screen-nokia');
    const screenI = document.getElementById('screen-iphone');

    screenN.innerText = nokia.trangThai ? (screenN.innerText === "Máy đang tắt" ? "Đang bật..." : screenN.innerText) : "Máy đang tắt";
    nokia.trangThai ? screenN.classList.remove('status-off') : screenN.classList.add('status-off');

    screenI.innerText = iphone.trangThai ? (screenI.innerText === "Máy đang tắt" ? "Đang bật..." : screenI.innerText) : "Máy đang tắt";
    iphone.trangThai ? screenI.classList.remove('status-off') : screenI.classList.add('status-off');
}

function handlePower(type) {
    let phone = (type === 'nokia') ? nokia : iphone;
    phone.trangThai ? phone.tatMay() : phone.batMay();
}

function handleSend(type) {
    let sender = (type === 'nokia') ? nokia : iphone;
    let receiver = (type === 'nokia') ? iphone : nokia;
    let input = document.getElementById(`input-${type}`);
    
    if (!sender.trangThai) {
        alert("Máy đang tắt!");
        return;
    }
    sender.soanTinNhan(input.value);
    sender.guiTinNhan(receiver);
    input.value = "";
    document.getElementById(`screen-${type}`).innerText = "Đã gửi!";
}

function handleViewInbox(type) {
    let phone = (type === 'nokia') ? nokia : iphone;
    let screen = document.getElementById(`screen-${type}`);
    if (!phone.trangThai) return;
    screen.innerHTML = phone.inbox.length ? "<b>Tin nhắn:</b><br>" + phone.inbox.join("<br>") : "Hộp thư trống";
    phone.suDungPin();
}

function handleCharge(type) {
    (type === 'nokia' ? nokia : iphone).sacPin();
}

updateDisplay();