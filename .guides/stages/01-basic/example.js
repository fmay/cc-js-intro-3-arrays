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
  document.write("A SIMPLE ARRAY<br/>");  
  
  var flowers = ["Daisy", "Rose", "Daffodil", "Weed"];
  var i;
  for(i=0; i<4; i++) 
    document.write(flowers[i] + " ");  

	// ANOTHER WAY
  document.write("<br/><br/>CREATED ANOTHER WAY<br/>");  
  
  flowers = [];
	flowers[0] = "Daisy";
	flowers[1] = "Rose";
	flowers[2] = "Daffodil";
	flowers[3] = "Weed";  
  for(i=0; i<4; i++) 
    document.write(flowers[i] + " ");  
  
	// YET ANOTHER WAY
  document.write("<br/><br/>YET ANOTHER WAY<br/>");  
  
  flowers = new Array;
	flowers[0] = "Daisy";
	flowers[1] = "Rose";
	flowers[2] = "Daffodil";
	flowers[3] = "Weed";  
  for(i=0; i<4; i++) 
    document.write(flowers[i] + " ");  

  
}






