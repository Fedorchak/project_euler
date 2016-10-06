function tr_n(i){
    if (i===1) tr=1;
    else tr=i+tr_n(i-1);
    return tr;
}

function num_divisors(a){
    n=0;
    for (i=1; i<=Math.sqrt(a); i++){
        if (a%i===0) n+=2;
    }
    if (a===Math.sqrt(a)*Math.sqrt(a)) n--;
    return(n);
}

j=1;
while (num_divisors(tr_n(j))<500){
    j++;
}

console.log(tr_n(j));