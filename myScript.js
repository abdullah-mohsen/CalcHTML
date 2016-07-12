function display(Num){ 

    Calculator.txt.value =Calculator.txt.value + Num;
}
//document.forms["Calculator"]["txt"].value
function opreatinDisplay(Num){   
    var x = Calculator.txt.value;
    var input = x[x.length-1];
    if(input==Num){
        alert("should be not click double same opreation ");
    }
    else if(input!=Num && x.length>1){
        x=x.replace(x[x.length-1],Num)
        Calculator.txt.value=x;
    }
    else{
         Calculator.txt.value=Calculator.txt.value + Num;
    }
}


function clearForm(){
    Calculator.txt.value='';
}

function getResult(){
    var result=true;
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