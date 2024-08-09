// let arr=["ashi","anil" ,"anilket"];
// // arr.forEach(function printVal(val){

// //     console.log(val)
// // });




// arr.forEach((val)=>{
//     console.log(val)
// })
    


//..................................forEach.......................................
// let numb =[2,4,78,69,3];
// numb.forEach((num) =>{
//     console.log(num*num);
// })



//...................................map....................................


// let nums=[2,4,5,6,5,5,4,5]
// let newnumber=nums.map((val) =>{
//     console.log(val)
// });

// console.log(newnumber);



//...............................filter..................................


// let a=[24,65,87,2]

// let b=a.filter((val)=>{
//     return val > 25;
    
// })
// console.log(b)


//.............................reduce....................................


// let a=[1,2,3,4,5,6,8];

// const sum =a.reduce((res , nex) =>{
//     return  res + nex;
// })
// console.log(sum);

//''''''''''''''''''''''''''''''''''''''''''''''''............................


// let a=[2,6,7,8,9,4,5];
// const greater =a.reduce((pre , cur)=>{
//     return pre > cur ? pre :cur;
// })

// console.log(greater)

//...............................................................................

// let a=[90,55,47,6,98,78,99,93]

// const newa=a.filter((val)=>{
//     return val>=90;
// })
// console.log(newa)




//...........................................................
let n=prompt("enter a number: ");
let a=[];
for(let i=1; i<=n; i++){
    a[i-1] =i;

}
console.log(a);