const delay = 3000;

let  remainingTime = delay-1000;
const countDownInterval=setInterval(()=>{
    console.log(`Genrating random number in ${remainingTime/1000} seconds...`);
    remainingTime-=1000;
    if(remainingTime<=0){
        clearInterval(countDownInterval);
    }
},1000);

setTimeout(()=>{
    const randomNumber = Math.floor(Math.random()*100);
    console.log(`Random Number genrated: ${randomNumber}`)
},delay);