
//o try catch não identifica erro de sintaxe (esquecer parenteses ou chaves)
try{
    function sumNumber(n1,n2,n3,n4) {
    console.log(n1+n2+n3+n4);
    }

    sumNumber (10,20,30,40);
}
catch (error) {
    console.log (error);
    console.log ("Entre em contato com o administrador")
}
console.log("------------------");

try {
    function sumNumber(n1,n2,n3,n4) {
    console.log(n1+n2+n3+n44)
    }

    sumNumber (10,20,30,40);
}
catch (error) {
    console.log (error.message);
    console.log ("Entre em contato com o administrador")
}