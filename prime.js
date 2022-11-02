function myfunction(num){
    let count=0;
for(let i = 1;i<=num;i++){
if(num%i==0){
    count++;	
}
}
if(count==2){
    return true;
}	
}
let ans = myfunction(13);

if(ans==true){
    console.log("Prime")
}else{
    console.log("No Prime")
}