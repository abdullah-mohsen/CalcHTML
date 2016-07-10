  function display(Num){ 
                Calculator.txt.value=Calculator.txt.value + Num;
            }

            function clearForm(){
                Calculator.txt.value='';
            }

            function getResult(){
                var evalo = eval(Calculator.txt.value);
                Calculator.txt.value= evalo;
            }
           