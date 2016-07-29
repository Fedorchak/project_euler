fib=[1,2];
i=0;
while (fib[i+1]<4000000){
    fib[i+2]=fib[i]+fib[i+1];
    i++;
}
sum=0;
for (j=0; j<fib.length; j++){
    if (fib[j]%2===0){
        sum+=fib[j];
    }
}
console.log(sum);