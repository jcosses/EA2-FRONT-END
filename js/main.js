
 console.log("Hola Mundo Como estan");
 var variable=true
 const constante=5
 console.log(constante)
 variable=false
 console.log(variable)

// // Operedores Arisméticos
 var Num1 = 15
 var Num2 = 3
 var vNom ="Juan Carlos"
 var vApellidos = "Osses Vidal"
 console.log("Suma: ",Num1+Num2)
 console.log("Resta: ", Num1-Num2)
 console.log("División: ",Num1/Num2)
 console.log("Multiplicación: " + Num1*Num2)
 console.log("Nombre Completo: "+ Nom+" "+vApellidos)
 console.log("Resto de Divición: ", Num1%2)

// Sentencias Condicionales
 if(Num1%2 == 0){
     console.log("El ",vNum1,"Es Número Par ")
 }
 else{
     console.log("El ",vNum1,"Es Numero Impar ")
 }

// Operadores Comparación
 var vGlosa = "El Número: "
 if(Num1>Num2){
     console.log(vGlosa,vNum1,"Es Mayor que",vNum2);
 }
 else if(Num1<Num2){
     console.log(vGlosa,vNum2,"Es Menor que",vNum1);
 }
 else{
     console.log(vGlosa,vNum1,"Es Igual a ",vNum2);
 }

// Sumar dos numeros 
function Suma(){
    var vfNum1 = document.getElementById("vNum1").value
    var vfNum2 = document.getElementById("vNum2").value
    
    if(vfNum1==="" || vfNum2==="")
    { alert("Debe Completar todos los Datos..");}
    else{
        var vfSuma = parseInt(vfNum1) + parseInt(vfNum2);
        document.getElementById("vResultado").value = vfSuma  
    }
}
