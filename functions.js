
//a) Print odd numbers in an array
// Anonymous Function
var foo=function (arr){
    var even=[];
    var odd=[];
        for (var i=0; i<arr.length; i++){
            if (arr[i]%2===0){
                even.push(arr[i]);
            }
            else
                odd.push(arr[i]);
        }
        return odd.join(" ");
    }
    var a=[1,2,3,4,5,6]
    console.log(foo(a))
// Output = 1 3 5

// IIFE Function
var b=[1,2,3,4,5,6];
(function (arr) {
    var odd=[];
    var even=[];
        for (let i = 0; i<arr.length; i++) {
            if (arr[i]%2=== 0) {
                even.push(arr[i]);
            }
            else
                odd.push(arr[i]);
        }
    console.log(odd.join(" "))
    })(b);
// Output = 1 3 5





 //b) Convert all the strings to title caps in a string array
 // Anonymous Function
var foo1= function(arr){
    var temp=[]
        for(var i=0;i<arr.length;i++) {
            var v=arr[i].split(' ');
            
        for (var j=0; j < v.length; j++) {
            v[j]=v[j].charAt(0).toUpperCase() + v[j].substr(1).toLowerCase() ;
        }
        temp.push(v.join(" "))
    }
    return(temp);
    }
    var c=["guvi geek","private limited","chennai"];
    console.log(foo1(c));
// Output = ["Guvi Geek","Private Limited","Chennai"]

// IIFE Function
var d=["guvi geek","private limited","chennai"];
(function (arr){
    var temp=[]
        for(var i=0;i<arr.length;i++) {
            var v=arr[i].split(' ');
                
        for (var j=0; j < v.length; j++) {
            v[j]=v[j].charAt(0).toUpperCase() + v[j].substr(1).toLowerCase() ;
        }
        temp.push(v.join(" "))
    }
    console.log(temp);
    })(d);
// Output = ["Guvi Geek","Private Limited","Chennai"]





//c) Sum of all numbers in an array
// Anonymous function
var foo2 = function(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
         sum=sum+arr[i];
    }
    return sum;
}
var e=[10,20,30,40,50];
console.log(foo2(e));
// Output = 150

// IIFE Function
var f=[10,20,30,40,50];
(function(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
         sum=sum+arr[i];
    }
    console.log(sum);
})(f);
var f=[10,20,30,40,50];
// Output = 150





//d) Return all the prime numbers in an array
// Anonymous Function
var foo3= function(arr){
    var isPrime=[];
    var notPrime=[];
    for(let i=0; i<arr.length; i++){
    if (arr[i]<2){
        notPrime.push(arr[i]);
    }
    else{
    var count=0;
    for (let j=2; j<arr[i]; j++){
        if (arr[i]%j===0){
          count=count+1;
          break;
     }}
     if (count===1){
       notPrime.push(arr[i]);}
       else
       isPrime.push(arr[i]);
    
 } 
}
return isPrime;
}
var g=[1,2,5,7,21,23];
console.log(foo3(g));
// Output = [2,5,7,23]

// IIFE Function
var g=[1,2,5,7,21,23];
(function(arr){
    var isPrime=[];
    var notPrime=[];
    for(let i=0; i<arr.length; i++){
    if (arr[i]<2){
        notPrime.push(arr[i]);
    }
    else{
    var count=0;
    for (let j=2; j<arr[i]; j++){
        if (arr[i]%j===0){
          count=count+1;
          break;
     }}
     if (count===1){
       notPrime.push(arr[i]);}
       else
       isPrime.push(arr[i]);
    
 } 
}
console.log(isPrime);
})(g);





// e)Return all the palindromes in an array
// Anonymous Function
var foo4=function(arr){
var temp=[];
for(let i=0; i<arr.length; i++){
    var b=arr[i].split("").reverse().join("");
    if (arr[i]===b){
    temp.push(b);}
}
return(temp);
}
var h=["and","level","wow","guvi","madam"];
console.log(foo4(h))
// Output = ['level', 'wow', 'madam']

// IIFE Function
var j=["and","level","wow","guvi","madam"];
(function(arr){
    var temp=[];
    for(let i=0; i<arr.length; i++){
        var b=arr[i].split("").reverse().join("");
        if (arr[i]===b){
        temp.push(b);}
    }
    console.log(temp);
    })(j)
// Output = ['level', 'wow', 'madam']





// f)Return median of two sorted arrays of the same size
// Anonymous Function
var foo5=function(arr1,arr2){
var c=[...arr1,...arr2].sort((a,b) => a-b);
let i=parseInt(c.length/2)
if (c.length%2===0){
   let d=(c[i]+c[i-1])/2
    return(d)
}
else
    return(c[i]);
}
 var x=[23,15,45,10];
 var y=[100,50,20,5];
 console.log(foo5(x,y))
 // Output = 21.5

// IIFE Function
 var x=[23,15,45,10];
 var y=[100,50,20,5];
 (function(arr1,arr2){
    var c=[...arr1,...arr2].sort((a,b) => a-b);
    let i=parseInt(c.length/2)
    if (c.length%2===0){
       let d=(c[i]+c[i-1])/2
        console.log(d)
    }
    else
        console.log(c[i]);
    })(x,y)
// Output = 21.5





// g)Remove duplicates from an array
// Anonymous Function
var foo6=function(a){
for (var i=0; i<a.length; i++){
    for (var j=i+1; j<a.length; j++) {
        if(a[i]===a[j]){
            for (k=j; k<a.length-1; k++){
                a[k]=a[k+1]
            }
            a.length--;
        }    
    }
}
return a;
}
var a=[1,2,3,4,1,3,2,4,5,10,10,6];
console.log(foo6(a))
// Output = [1,2,3,4,5,10,6]

// IIFE Function
var a=[1,2,3,4,1,3,2,4,5,10,10,6];
(function(a){
    for (var i=0; i<a.length; i++){
        for (var j=i+1; j<a.length; j++) {
            if(a[i]===a[j]){
                for (k=j; k<a.length-1; k++){
                    a[k]=a[k+1]
                }
                a.length--;
            }    
        }
    }
    console.log(a);
    })(a);
// Output = [1,2,3,4,5,10,6]




// h) Rotate an array by k times
// Anonymous Function
var foo7=function(arr, k) {
    var n = arr.length;
    var rotations = k % n;
    for (let i = 0; i < rotations; i++) {
      const temp = arr[n - 1];
      for (let j = n - 1; j > 0; j--) {
        arr[j] = arr[j - 1];
      }
       arr[0] = temp;
    }
   return arr;
  }
  var s=[1,2,3,4,5]
  var t=2
  console.log(foo7(s,t))
// Output = [4,5,1,2,3]

// IIFE Function
var s=[1,2,3,4,5];
var t=2;
(function(arr, k) {
    var n = arr.length;
    var rotations = k % n;
    for (let i = 0; i < rotations; i++) {
      const temp = arr[n - 1];
      for (let j = n - 1; j > 0; j--) {
        arr[j] = arr[j - 1];
      }
       arr[0] = temp;
    }
   console.log(arr);
  })(s,t);
// Output = [4,5,1,2,3]





    








    
