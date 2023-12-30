let num1 = 8
let num2 = 2
let sum = document.getElementById('sum-el')
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
    function add(){
        // console.log("add")
        // sum = num1 + num2
        sum.innerText = num1 + num2
        
            }   
    
    function subtract(){
        // console.log("sub")
       sum.innerText = num1-num2      
        
    }   
    
    function divide(){
        // console.log("divide")
            sum.innerText = num1/num2     
    }   
    
    function multiply(){
        // console.log("mul")
            sum.innerText = num1*num2     
    }
    
    

// Call the correct function when the user clicks on one of the buttons


// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


