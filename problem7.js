function isprime(a){
    for(i=2; i<=Math.sqrt(a);i++){
        if(a%i===0) return false;
    }
    return true;
}

n=1;
a=2;
krok=2;

while(n<10001){
    if (isprime(krok) && krok>a){
        a=krok;
        n++;
        krok++;
    }
    else krok++;
}

console.log(a);