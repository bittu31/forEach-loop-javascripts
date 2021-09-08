//              forEach Theory
//The forEach() method is an array method which is used to 
//execute a function on each item in an array. We can use it with the 
//JavaScript data types like Arrays, Maps, Sets, etc. It is a useful 
//method for displaying elements in an array.

/**  The forEach() method executes the provided callback once 
 for each element present in the array in ascending order.

 Parameter Details

1. callback: It is a function used to test for each element. The callback function 
accepts three arguments, which are given below.

* Element value: It is the current value of the item.
* Element index: It is the index of the current element processed in the array.
* Array: It is an array which is being iterated in the forEach() method.

2. thisObject: It is an object to use as this when executing the callback.

Return Value
It will return the created array.

<<**  Disadvantage of forEach()*>>>
The following are the disadvantages of the use of the forEach() method:

1. It does not provide a way to stop or break the forEach() loop.
2. It only works with arrays.  */


//Que 1. 
// let apps = ['WhatsApp', 'Instagram', 'Facebook'];  
// let playStore =['Teligram']  
  
// apps.forEach(function(item){  
//     playStore.push(item)  
  
// });      
//   console.log(playStore);  


// QUE 2;
// const months = ['jan', 'feb', 'mar','apr', 'may', 'jun', 'jul', 'agu', 'sep', 'oct', 'nov', 'dec']
// months.forEach(

//     function(value, index)
    
//     {
//     console.log(value);      
    
// });

//QUe 3;

// const months = ['jan', 'feb', 'mar','apr', 'may', 'jun', 'jul', 'agu', 'sep', 'oct', 'nov', 'dec']
// let SayHello = function(value){
//     console.log("Greating message for user");

// }

// months.forEach(SayHello);

//Que 4.;

// var apps = ['WhatsApp', 'Instagram', 'Facebook'];  
// var playStore = ['snap'];  
// apps.forEach(function (item) {  
//     playStore.push(item);  
// });  
// console.log(playStore);

//Que 5.
// var apps = ['WhatsApp', 'Instagram', 'Facebook'];  
// var playStore = [];  
// apps.forEach(function (item) {  
//     playStore.pop(item);  
// });  
// console.log(playStore);

//Que 6.
// var apps = ['WhatsApp', 'Instagram', 'Facebook'];  
// apps.forEach(function (item) {  
//     apps.pop(item);  
// });  
// console.log(apps);

//Que 7.
// var num = [5, 10, 15];  
// num.forEach(function (value) {  
//   console.log(value);  
// });  

//Que 8.  // doubt for each
// var num = [5, 10, 15];
// var add = [9];  
//  num.forEach(function (value) { 
//      add.push(value);
//   console.log(add);  
//  });  

//Que 9.
//  let apps = [5, 10, 15];
//  let add = [];  
//   apps.forEach(function (value) { 
//       add.pop(value);
//    console.log(add);  
//   });  

//Que 10.
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);
// console.log(numbers);

