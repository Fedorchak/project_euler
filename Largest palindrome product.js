{\rtf1\ansi\ansicpg1251\deff0\deflang1058{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\*\generator Msftedit 5.41.21.2510;}\viewkind4\uc1\pard\sa200\sl276\slmult1\lang1033\f0\fs22 function reverse(x)\{\par
    y=0;\par
    while (x>0)\{\par
        y=y*10+x%10;\par
        x=Math.floor(x/10);\par
    \}\par
    return y;\par
\}\par
\par
function palindrom(n)\{\par
    return (n=reverse(n));\par
\}\par
\par
largest=0;\par
a=100;\par
\par
while (a<1000)\{\par
    b=a;\par
    while (b<1000)\{\par
        if (palindrom(a*b)&&(a*b>largest))\{\par
            largest=a*b;\par
        \}\par
        b++;\par
    \}\par
    a++;\par
\}\par
\par
console.log(largest);\par
}
 