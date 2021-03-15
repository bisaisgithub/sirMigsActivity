function add(){
    var number1 = parseInt(document.getElementById('txtBox1').value);
    var number2 = parseInt(document.getElementById('txtBox2').value);
    var result = number1 + number2;

    answer(result);
}
function subtract(){
    var number1 = parseInt(document.getElementById('txtBox1').value);
    var number2 = parseInt(document.getElementById('txtBox2').value);
    var result = number1 - number2;

    answer(result);
}
function multiply(){
    var number1 = parseInt(document.getElementById('txtBox1').value);
    var number2 = parseInt(document.getElementById('txtBox2').value);
    var result = number1 * number2;

    answer(result);
}
function divide(){
    var number1 = parseInt(document.getElementById('txtBox1').value);
    var number2 = parseInt(document.getElementById('txtBox2').value);
    var result = number1 / number2;

    answer(result);
}

function answer(result){
    document.getElementById('result').value = result;

}