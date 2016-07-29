a=100;
mas=[];
j=0;

//створюємо масив дільників числа а

for (i=2; i<a+1; i++){
    if (a%i===0){
        mas[j]=i;
        j++;
    }
}

// arr.splice(i,j,k...) видаляє, починаючи з елемента i, j елементів 
// і вставляє k... елементи 

for(i=0; i<mas.length; i++){
    for (k=2; k<mas[i]; k++){
        if (mas[i]%k===0){
            mas.splice(i,1);
            i-=1;
            break;
        }
    }
}
console.log(mas[mas.length-1]);