---
title: ARRAYS
files: []
editable: true
layout: 2-panels-tree

---
#'Forking' this module
If you check the url address bar of your browser, if it starts with `https://codio.com/anon/....` then this means it is an anonymous project and any changes you make will be lost when you close down the browser tab. This will be the case if you access the module from the Codio Courses screen.

To avoid losing changes, you can 'fork' the module into your own Codio account where it will appear in your projects list. To do this, select the **'Project->Fork'** menu item and choose a suitable name for the project.

#A few words about the Codio Guide
Before we start with this module here are a few pointers about using this Codio Guide.

If you've already read this in another Guide then skip to the next section.

![](.guides/img/guides-helper.jpg)

#The File Tree
The left most panel is the File Tree **(1)**. This is where your project's files are stored. You can open up files you see listed there by clicking on them.

#About the Codio Guide
The Codio Guide **(2)** is the content you are reading right now. It's worth knowing the following

- if you ever close the Guide tab by mistake, simply open in from the View menu **(3)**.
- you can expand and collapse the Guide's Table of Contents **(4)** with the Hamburger icon **(5)**
- you move from one section of the Guide to the next using either the Table of Contents or the Navigation Buttons (6)

#The Rocket Menu
The Rocket menu **(7)** is a dropdown menu that lets you load code into your file tree when you click it as different sections might want to show different bits of code.

You are usually encouraged to mess around with the live code. It is perfectly likely that you can wreck the code so pressing the Rocket menu button will restore the code again to its original state.

#Previewing
The Preview button **(8)** lets you run your web application. When you press it, it will open up a preview window so you can play with your app.

#Code Tabs
When you open some code from the file tree or the Codio Guide opens a file for you automatically, they will appear within a tab **(9)** in one of the panels. You can have several of these open at one time so you may need to click on the respective tab to get to see the file you want.


---
title: Introduction
files: []
editable: false
layout: ""

---
Arrays can be found in one way or another in all programming languages. We'll see how powerful they are and how easy they are to use and work with.
---
title: Basic Arrays
files:
  - path: example.js
    action: open
    ref: ""
editable: true
layout: ""

---
>The code for 'Basics' module is already loaded in your project.

Let's look at the following code

```
var flower1, flower2, flower3, flower4;

flower1="Daisy";
flower2="Rose";
flower3="Daffodil";
flower4="Weed";
document.write(flower1 + " " + flower2 + " " + flower3 + " " flower4 + "<br/>);
```

Now imagine you needed to add lots more flowers. Things get really inefficient and messy just adding a number to the end of `flower`. 

Javascript provides a far better way of managing arrays of things 

```
var flowers = ["Daisy", "Rose", "Daffodil", "Weed"];
var i;
for(i=0; i<4; i++) 
	document.write(flowers[i] + " "); 
```

Here's another way to create the same array

```
var flowers = [];
flowers[0] = "Daisy";
flowers[1] = "Rose";
flowers[2] = "Daffodil";
flowers[3] = "Weed";  
for(i=0; i<4; i++) 
	document.write(flowers[i] + " ");  
```

If you have not covered *loops* yet, don't worry. You just need to know that this will loop through the entire array `flowers[]`.

You can see how much simpler the code is using an array. Imagine you had hundreds of flowers. The top piece of code would become hundred of lines long, but the second one would stay exactly the same.

As we'll see in a moment, we can also manipulate arrays easily.
---
title: Array elements begin at 0
files: []
editable: false
layout: ""

---
One thing you should know and absorb asap, is the fact that the first element in an array is `flowers[0]` and NOT `flowers[1]`.
---
title: Getting the size of the array
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 02-length, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Length'. 

Something very important is being able to determine the number of elements in an array from Javascript.

This is done as follows

```
var flowers = ["Daisy", "Rose", "Daffodil", "Weed"];
var upperLimit = flowers.length;
document.write("Our array has " + upperLimit + " elements<br/>");
```

Where `.length` becomes hugely helpful is that we can now use this within our loop. In most cases, you will not know the size of the array when you are writing your code,so rather than writing this

```
var flowers = ["Daisy", "Rose", "Daffodil", "Weed"];
var i;
for(i=0; i<4; i++) 
	document.write(flowers[i] + " "); 
```

We can write this

```
var flowers = ["Daisy", "Rose", "Daffodil", "Weed"];
var i;
for(i=0; i<flowers.length; i++) 
	document.write(flowers[i] + " ");
```
---
title: Adding array elements
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 03-pushpop, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Push'. 

Adding new array elements is done using the `.push` method.

```
var flowers = ["Daisy", "Rose"];
var i;
document.write("<br/>To start with ...<br/>");  
  for(i=0; i<flowers.length; i++) 
      document.write(flowers[i] + " ");  
  
  document.write("<br/><br/>To finish with ...<br/>");  
  flowers.push("Daffodil", "Weed");
  for(i=0; i<flowers.length; i++) 
      document.write(flowers[i] + " ");
```
Here, we added 2 new array elements but we can add just one element like this

```
flowers.push("Daffodil");
```
---
title: Removing array elements
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 04-remove, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Remove'. 


We can remove the last element in an array using the `.pop` method, or the first element using the `.shift` method.

Take a look at the code below.

```
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
```

- we set up our array as before and display the contents
- we then `pop` the last element out of the array
- and `shift` the first element out of the array
- note how the `pop()` and `shift()` functions return the element being removed from the array
- we finally display the new, leaner array

---
title: More array functions and methods
files: []
editable: false
layout: ""

---
We'll cover exactly what functions and methods are in another module.

There are a lot of other things you can do with arrays, such as 

- extracting portions
- sorting
- reversing the element order
- joining arrays together
- joining string elements together to form a single string
- and much more

We don't want to explain all these things in this module, but if you want to sniff around what's available, [refer to this handy reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

---
title: Multi-dimensional arrays
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 05-twodimensional, example.js"
    action: open
    ref: ""
editable: true
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select '2 Dimensional'. 

Our previous flowers examples shows the use of a *one dimensional array*. 

You can also create multi-dimensional arrays. In the example below, we are creating a 2 dimensional array and filling it with numbers.

Don't worry too much if this is too much for you at this stage. 

```
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
```

This will display the following in your preview window 

```
R0C0 R0C1 R0C2 R0C3 R0C4 
R1C0 R1C1 R1C2 R1C3 R1C4 
R2C0 R2C1 R2C2 R2C3 R2C4  
```

- `var myArray = new Array()` initializes a new, empty array for us
- we are creating our new 2D array using two loops, one for the 'rows' and one for the 'columns'.
- inside the first loop, we create another empty array that will hold the column information `myArray[rowCtr]=new Array()`
- we now have an array inside each row array that can be addressed with `myArray[rowCtr][colCtr]`, in our case we are populating it with `myArray[rowCtr][colCtr]="R" + rowCtr + "C" + colCtr` 

You can play with this in the sample code.

