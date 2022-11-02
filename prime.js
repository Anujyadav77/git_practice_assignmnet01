function myfunction(num){
for(let i = 1;i<=num;i++){
if(num%i==0){
return true;	
} else{
return false;	
}
}	
}
let ans = myfunction(13);
console.log(ans);