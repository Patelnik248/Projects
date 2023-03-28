let vowel=0;
let name1 = prompt("Enter Your Name: ");
let n = name1.length;
name1 = name1.toLowerCase();
console.log(name1);
console.log(n);
for(let i=0;i<n;i++){
    if(name1[i] == 'a' || name1[i]=='e' || name1[i]=='i'|| name1[i]=='o'|| name1[i]=='u' ){ 
        vowel++;
        console.log(name1[i]);
    }  
}
console.log(`Total number of Vowel is ${vowel}`);