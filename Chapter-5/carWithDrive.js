var fiat = {
  make : "피아트",
  model : "500",
  year : 1957,
  color : "암청색",
  passengers : 2,
  convertible : false,
  mileage : 88000,
  fuel : 0,
  started : false,
  start : function() {
    if(this.fuel === 0) {
      alert("연료통이 비었습니다. 시동을 걸기 전에 연료를 채우세요!");
    } else {
      this.started = true;
    }
  },
  stop : function() {
    this.started = false;
  },
  drive : function() {
    if(this.started) {
      if(this.fuel > 0) {
        alert(this.make + " " + this.model + "가 붕붕 달립니다!");
        this.fuel = this.fuel - 1;
      } else {
        alert("저런, 연료가 떨어졌네요.");
        this.stop();
      }
    } else {
      alert("먼저 시동을 거세요.");
    }
  },
 addFuel : function(amount) {
  this.fuel = this.fuel + amount;
 }
};

var cadi = {
  make : "GM",
  model : "캐딜락",
  year : 1955,
  color : "갈색",
  passengers : 5,
  convertible : false,
  mileage : 19892,
  fuel : 0,
  started : false,
  start : function() {
    if(this.fuel === 0) {
      alert("연료통이 비었습니다. 시동을 걸기 전에 연료를 채우세요!");
    } else {
      this.started = true;
    }
  },
  stop : function() {
    this.started = false;
  },
  drive : function() {
    if(this.started) {
      if(this.fuel > 0) {
        alert(this.make + " " + this.model + "가 붕붕 달립니다!");
        this.fuel = this.fuel - 1;
      } else {
        alert("저런, 연료가 떨어졌네요.");
        this.stop();
      }
    } else {
      alert("먼저 시동을 거세요.");
    }
  },
 addFuel : function(amount) {
  this.fuel = this.fuel + amount;
 }
};


var taxi = {
  make : "웹타운 모터스",
  model : "택시",
  year : 1955,
  color : "노란색",
  passengers : 4,
  convertible : false,
  mileage : 281341,
  fuel : 0,
  started : false,
  start : function() {
    if(this.fuel === 0) {
      alert("연료통이 비었습니다. 시동을 걸기 전에 연료를 채우세요!");
    } else {
      this.started = true;
    }
  },
  stop : function() {
    this.started = false;
  },
  drive : function() {
    if(this.started) {
      if(this.fuel > 0) {
        alert(this.make + " " + this.model + "가 붕붕 달립니다!");
        this.fuel = this.fuel - 1;
      } else {
        alert("저런, 연료가 떨어졌네요.");
        this.stop();
      }
    } else {
      alert("먼저 시동을 거세요.");
    }
  },
 addFuel : function(amount) {
  this.fuel = this.fuel + amount;
 }
};

fiat.start();
fiat.drive();
