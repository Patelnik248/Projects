let marks=[];
for(let i=0;i<5;i++){
    console.log(`Emter marks of student ${i+1}`);
    marks[i]=prompt(`Enter marks of student ${i+1}`);
}
let max=0;
for(let i=0;i<5;i++){
    max<marks[i]?max=marks[i]:max=max;
}
console.log(`Maximum mark is ${max}`);