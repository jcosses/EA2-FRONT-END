console.log('Estoy en main.js');

// creamos la funcion
function valForm(){
   
    // declarion de variables
    var vNom=$('#nombre').val();
    var vMail = $('#correo').val();
    var vMensaje =$('#mensaje').val();
    
    // validar nombre
    if(vNom=="" || vNom==null){
        Error_Color("nombre");
        Err_Vacios("Nombre");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vNom)){
            Error_Color("nombre");
            Err_Contenido("No se permiten carateres especiales o numeros ");
            return false;
        }
    }

    // validar correo
    if(vMail=="" || vMail==null){
        Error_Color("correo");
        Err_Vacios("Correo Electrónico");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(vMail)){
            Error_Color("correo");
            Err_Contenido("Por favor ingrese un correo válido");
            return false;
        }
    }

    // validar mensaje
    if(vMensaje=="" || vMensaje==null){
        Error_Color("mensaje");
        Err_Vacios("Mensaje ");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vMensaje)){
            Error_Color("mensaje");
            Err_Contenido("No se permiten caracteres especiales");
            return false;
        }
    }

    $('form').submit();
    return true; 
} 

$('input').focus(function(){
   colorDefault('nombre');
   colorDefault('correo');
   colorDefault('asunto');
});

$('textarea').focus(function(){
    colorDefault('mensaje');
});

// creamos un funcion de color por defecto a los bordes de los inputs
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

// creamos una funcion para cambiar de color a su bordes de los input
function Error_Color(dato){
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

// funcion para mostrar la alerta
function Err_Contenido(texto){
    alert('Error en el ingreso ' + texto);
    // $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}

function Err_Vacios(campo){
    alert ("Debes Completar los datos solicitados en el "+campo);
}