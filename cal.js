const userinput = document.getElementById("userinput");
let expression = "";

function press(num) {
  expression += num;
  userinput.value = expression;
}
function equal(e) {
  let next = userinput.value
  userinput.value = `${next} = ${eval(expression)}`;
  expression = "";
}
function erase() {
  expression = "";
  userinput.value = expression;
}
