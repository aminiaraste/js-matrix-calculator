var buttons =document.querySelectorAll(".calc-btn");
var display = document.getElementById("result");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;
    console.log(value);    
    if (value === "C") {
      display.value = "";    
    }else if (value === "=") {
        try{
            display.value= eval(display.value);    
        }catch (error) {
            display.value = "Error"; 
        }
    }else{
        display.value += value;  
    }
    
  });
});
