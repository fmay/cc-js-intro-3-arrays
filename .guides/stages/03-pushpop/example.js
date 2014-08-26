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
  document.write("PUSH<br/>");  

  var flowers = ["Daisy", "Rose"];
  var i;

  document.write("<br/>To start with ...<br/>");  
  for(i=0; i<flowers.length; i++) 
      document.write(flowers[i] + " ");  
  
  document.write("<br/><br/>To finish with ...<br/>");  
  flowers.push("Daffodil", "Weed");
  for(i=0; i<flowers.length; i++) 
      document.write(flowers[i] + " ");
  
}






