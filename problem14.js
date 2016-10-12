function sequence(x){
    chain=[x];
    while (chain[chain.length-1]!==1){
        if (x%2===0){
            chain[chain.length]=x/2;
            x=x/2;
        }
        else {
            chain[chain.length]=3*x+1;
            x=3*x+1;
        }
    }
    return chain;
}

el=1;
long=0;
for (i=1; i<1000000; i++){
    if(sequence(i).length>long){
        long=sequence(i).length;
        el=i;
    }
}

console.log(el);