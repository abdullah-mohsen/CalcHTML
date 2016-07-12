function display(Num){ 
     
    Calculator.txt.value =Calculator.txt.value + Num;
}
function opreatinDisplay(op){
    
    //check if the input is empty
    if(Calculator.txt.value.length < 1)
        return ;

    var x = Calculator.txt.value;
    var input = x[x.length-1];
    var check;

    if(input==op){
      return;
    }
    
    else if(input!=op &&  (input.charCodeAt(0)>=48 && input.charCodeAt(0)<=57 )){                 
               Calculator.txt.value+= op;
    }
    
    else{

         Calculator.txt.value= x.substring(0,x.length(-2)) + op; 
    }
}


function clearForm(){
    Calculator.txt.value='';
}

function getResult(){
  
     if(Calculator.txt.value.length < 1)
        return ;
    var result=true;
    if(result){
        var evalo = eval(Calculator.txt.value);
        Calculator.txt.value= evalo;
    }
}
