// function ashi(str){
//     let count=0;
//     for(const char of str){
//         if(char === 'a' || char=== 'e' ||char==='o'  ||char==='i' || char==='u'){
//   count++;
//   console.log(char);
//         }
        

//     };
// console.log(count)
// }
// ashi("ashhkjiiffd");


const vowels = (str)=>{
    let count=0;
    for(const char of str){
        if(char==='a' || char==='i' || char==='e' || char=== 'o'  || char==='u'){
            count++;
            console.log("the given vowel of  char " +char)
        }
    }
    console.log(count)
}

vowels("ashishj")