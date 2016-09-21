for (c=5; c<500; c++){
    for (b=4; b<c; b++){
        for (a=3; a<b; a++){
            if ((a*a+b*b===c*c)&&(a+b+c===1000)){
                console.log(a*b*c);
                break;
            }
        }
    }
}