var compus = 0;
var valor = 0;
var descuento = 0;
var total = 0;
var porcentaje = 0;

function comprar(){
    compus = document.getElementById("cantidad").value;
    valor = compus * 820000;
    if (valor >= 1640000 && valor <= 3280000) {
        descuento = valor * 0.15;
        total = valor - descuento;
        porcentaje = 15;
        document.getElementById("valorCompra").value = valor;
        document.getElementById("valorDesc").value = descuento;
        document.getElementById("valorTotal").value = total;
        document.getElementById("porc").value = "Su descuento fue del" + porcentaje + "%";
    }    elseif(valor >= 3280000 && valor <= 6560000){
        descuento = valor * 0.25;
        total = valor - descuento;
        porcentaje = 25;
        document.getElementById("valorCompra").value = valor;
        document.getElementById("valorDesc").value = descuento;
        document.getElementById("valorTotal").value = total;
        document.getElementById("porc").value = "Su descuento fue del" + porcentaje + "%";
    }
    elseif(valor >= 6560000 && valor <= 9840000){
        descuento = valor * 0.35;
        total = valor - descuento;
        porcentaje = 35;
        document.getElementById("valorCompra").value = valor;
        document.getElementById("valorDesc").value = descuento;
        document.getElementById("valorTotal").value = total;
        document.getElementById("porc").value = "Su descuento fue del" + porcentaje + "%";
    }
    elseif(valor > 9840000){
        descuento = 0;
        total = valor;
        porcentaje = 0;
        document.getElementById("valorCompra").value = valor;
        document.getElementById("valorDesc").value = descuento;
        document.getElementById("valorTotal").value = total;
        document.getElementById("porc").value = "Su descuento fue del" + porcentaje + "%";
    }
}