function isprime(a){
    for(i=2; i<=Math.sqrt(a);i++){
        if(a%i===0) return false;
    }
    return true;
}

sum=5;
for (c=5; c<20; c++){
    if (isprime(c)) sum+=c;
}

console.log(sum);