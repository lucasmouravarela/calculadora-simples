function inserindo(numero){
    document.form.textview.value = document.form.textview.value+numero;
}

function igual(){
    var resultado = document.form.textview.value;
    if (resultado){
        document.form.textview.value = eval(resultado)
    }
}

function limpando(){
    document.form.textview.value = "";
}