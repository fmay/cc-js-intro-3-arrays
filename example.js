/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // ARRAYS
  document.write("ARRAYS<br/><br/>");  

 
	// 2D ARRAYS
  document.write("A 2 DIMENSIONAL ARRAY<br/><br/>");  
  var rows = 3;
  var cols = 5;
  var rowCtr, colCtr;
  var myArray = new Array();

  for (rowCtr=0; rowCtr<rows; rowCtr++) {
    myArray[rowCtr]=new Array();
    for (colCtr=0;colCtr<cols;colCtr++) {
      myArray[rowCtr][colCtr]="R" + rowCtr + "C" + colCtr;
    }
  }
  for (rowCtr=0; rowCtr<myArray.length; rowCtr++) {
    for (colCtr=0; colCtr<myArray[rowCtr].length; colCtr++) {
      document.write(myArray[rowCtr][colCtr] + " ");
    }
    document.write("<br/>");
  }  
  
}






