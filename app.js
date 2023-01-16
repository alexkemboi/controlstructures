const number=prompt("enter a number less than 50");
const value=document.getElementById("results");
if(number>1){
for(var i=0;i<=number;i++){
    if(i==10){
        console.log(`The number has reached ${i}`);
    }else if(i==20){
        console.log(`The number has reached ${i}`);

    }else if(i==30){
        console.log(`The number has reached ${i}`);
    }
    else if(i==40){
        console.log(`The number has reached ${i}`);
    }
    else if(i==50){
        console.log(`The number has reached ${i}`);
    }
    else{
        console.log(`${i}`);
    }
}
}