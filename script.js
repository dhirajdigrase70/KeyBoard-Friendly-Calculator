let display = document.getElementById("display");
let input = "";
let del= document.getElementById("del")
//code foor oncleak function
// code for Each And Every Key Pressing
function appendInput(value) {
  input = input + value;
  display.value = input;
}
function backSpace(){
  console.log(input)
  input= Number(input.toString().slice(0,-1));
  display.value = input;
}

//code for "C" button
function clearDisplay() {
  input = "";
  display.value = "";
}

//code for "DEL" button
function backSpace(){
  console.log(input)
  input= Number(input.toString().slice(0,-1));
  display.value = input;
}
  // console.log(display.value)
  // let del = display.valur
  // display.valur = del - 1;
  // display.valur = [input.valueOf.length - 1];
  // console.log(display.value.toString(),"this is string");
  // console.log(display.value.pop(-1))
  // let newInput= Number(input.toString().slice(0,-1));
  
  // console.log(newInput);
  // input=newInput;


// code for "=" button
function calculate() {
  try {
    input = eval(input).toString();
    display.value = input;
  }
  catch (error) {
    display.value = "Error";
  }
}

