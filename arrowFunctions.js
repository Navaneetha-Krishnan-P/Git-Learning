// Arrow Functions
// a) Print odd numbers in an array
var foo=arr=>{
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





// b) Convert all the strings to title caps in a string array
var foo1=arr=>{
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
// Output = ['Guvi Geek', 'Private Limited', 'Chennai']





// c) Sum of all numbers in an array
var foo2 =arr=>{
    var sum=0;
    for (var i=0; i<arr.length; i++){
         sum=sum+arr[i];
    }
    return sum;
}
var e=[10,20,30,40,50];
console.log(foo2(e));
// Output = 150





// d) Return all the prime numbers in an array
var foo3=arr=>{
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





// e) Return all the palindromes in an array
var foo4=arr=>{
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
