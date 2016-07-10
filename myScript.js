function display(Num){ 
    Calculator.txt.value=Calculator.txt.value + Num;
}

function clearForm(){
    Calculator.txt.value='';
}

function getResult(){
    var result=validateForm();
    if(result){
        var evalo = eval(Calculator.txt.value);
        Calculator.txt.value= evalo;
    }
}

function validateForm() {
    var x = document.forms["Calculator"]["txt"].value;
   //var n = x.includes("++");
    if (x == "++" || x== "" || x=="**" || x=="--"||n==false) {
        alert("can not click double opretion in same time");
        return false;
    }
    return true;
 }