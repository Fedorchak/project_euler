a=0;
b=0;
for (i=1;i<101;i++){
    a=a+i*i;
}

for (i=1;i<101;i++){
    b+=i;
}

console.log(b*b-a);