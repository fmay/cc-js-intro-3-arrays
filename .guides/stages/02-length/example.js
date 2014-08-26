/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // ARRAYS
  document.write("ARRAYS<br/><br/>");  

  // BASIC
  document.write("LENGTH<br/>");  
  
  // LENGTH
	var flowers = ["Daisy", "Rose", "Daffodil", "Weed"];
  var upperLimit = flowers.length;
	document.write("Our array has " + upperLimit + " elements<br/>");  

  // Now write the array to the screen using flowers.length to limit
  for(i=0; i<flowers.length; i++) 
    document.write(flowers[i] + " ");
  
}






