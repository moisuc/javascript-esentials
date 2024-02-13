let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   let  area = length * width;
     document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

   function calculateTotal(){
   let gr1 = parseFloat(document.getElementById('grocery1').value);
   let gr2 = parseFloat(document.getElementById('grocery2').value);
   let gr3 = parseFloat(document.getElementById('grocery3').value);
   let total = gr1+gr2+gr3;
   document.getElementById('grocery_total').innerText = `The area of the rectangle is:$ ${total}`;

   }
