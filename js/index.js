document.querySelectorAll('.digit').forEach(el => {
  el.addEventListener('click', numClicked);
});

const display = document.getElementById('display');

function numClicked(ev) {
  let sum;
  const digit = ev.target.innerHTML;
 // let deley = document.getElementById('deley');
  display.value += digit;
if (digit == "c"){
    display.value='';
}else
  if (digit == "=") {
    if (display.value.indexOf('+') != -1) {
      let sign = display.value.indexOf('+');
      let str = display.value;
      let len = str.length;
      let num1 = parseFloat(display.value.substr(0, sign));
      let num2 = parseFloat(display.value.substr(sign + 1, len));
      sum = (num1) + num2;
    }
    if (display.value.indexOf('-') != -1) {
      let sign = display.value.indexOf('-');
      let str = display.value;
      let len = str.length;
      let num1 = parseFloat(display.value.substr(0, sign));
      let num2 = parseFloat(display.value.substr(sign + 1, len));
      sum = (num1) - num2;
    }
    if (display.value.indexOf('*') != -1) {
      let sign = display.value.indexOf('*');
      let str = display.value;
      let len = str.length;
      let num1 = parseFloat(display.value.substr(0, sign));
      let num2 = parseFloat(display.value.substr(sign + 1, len));
      sum = (num1) * num2;
    }
    if (display.value.indexOf('/') != -1) {
      let sign = display.value.indexOf('/');
      let str = display.value;
      let len = str.length;
      let num1 = parseFloat(display.value.substr(0, sign));
      let num2 = parseFloat(display.value.substr(sign + 1, len));
      sum = (num1) / num2;
    }
    display.value += sum;
  }

}
