/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // ARRAYS
  document.write("ARRAYS<br/><br/>");  

	// SHIFT & POP
  document.write("SHIFT & POP<br/>");  
  
  var flowers = ["Daisy", "Rose", "Daffodil", "Weed"];
  var i;
  var shifted, popped;
  
  document.write("We're starting with ... ");
  for(i=0; i<flowers.length; i++) 
      document.write(flowers[i] + " ");  
  popped = flowers.pop();
  shifted = flowers.shift();
  document.write("<br/><br/>Popped: " + popped + "<br/>");
  document.write("Shifted: " + shifted + "<br/>");
  document.write("<br/>And we're left with ...  ");
  for(i=0; i<flowers.length; i++) 
      document.write(flowers[i] + " ");

}






