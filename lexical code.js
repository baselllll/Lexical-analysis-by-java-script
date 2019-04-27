//constant
const OPEN_STATE = "accept";
const LOCKED_STATE = "reject";
class StateMachine {
  //declar constuctor
  constructor(code){
    this.state = LOCKED_STATE;
    this.code = code;
    this.entry = "";
  }
//digit("i")
  enterDigit(digit) {
    this.entry += digit;
  }

   startDevice() {
    if(this.entry === this.code) {
      this.state = OPEN_STATE;
    }
  }
  finalDevice() {
        this.state = LOCKED_STATE;
        this.entry = "";
  }
}
var s = "int x = 5 ;";
var data = s.split(" ",s.length);
for (var j = 0; j < data.length; j++) {
  switch (data[j]) {
    case "int":
    //StateMachine(int:::::code)
      const fsm1 = new StateMachine(data[j]);
      //loop 0 to 2 int بيمشى على اللوب الداخلى ليبين هل هيه accept or reject
      for (var i = 0; i < data[j].length; i++) {
        fsm1.enterDigit(data[j][i]);//i n t enter first char in int
        fsm1. startDevice();
        alert("["+data[j][i]+"]::"+fsm1.state);
        console.log("["+data[j]+"]::"+fsm1.state);
    }
    alert(data[j]+": keywords");
    break;
    case "x":
      const fsm2 = new StateMachine(data[j]);
      for (var i = 0; i < data[j].length; i++) {
        fsm2.enterDigit(data[j][i]);
        fsm2. startDevice();
        alert("["+data[j][i]+"]::"+fsm2.state);
        console.log("["+data[j]+"]::"+fsm2.state);
    }
    alert(data[j]+": Identifiers");
    break;
    case "=":
      const fsm3 = new StateMachine(data[j]);
      for (var i = 0; i < data[j].length; i++) {
        fsm3.enterDigit(data[j][i]);
        fsm3. startDevice();
        alert("["+data[j][i]+"]::"+fsm3.state);
        console.log("["+data[j]+"]::"+fsm3.state);
    }
    alert(data[j]+": Operator");
    break;
    case "5":
      const fsm4 = new StateMachine(data[j]);
      for (var i = 0; i < data[j].length; i++) {
        fsm4.enterDigit(data[j][i]);
        fsm4. startDevice();
        alert("["+data[j][i]+"]::"+fsm4.state);
        console.log("["+data[j]+"]::"+fsm4.state);
    }
    alert(data[j]+": Numeric");
    break;
    case ";":
      const fsm5 = new StateMachine(data[j]);
      for (var i = 0; i < data[j].length; i++) {
        fsm5.enterDigit(data[j][i]);
        fsm5. startDevice();
        alert("["+data[j][i]+"]::"+fsm5.state);
        console.log("["+data[j]+"]::"+fsm5.state);
    }
    alert(data[j]+": Special");
  }
}
