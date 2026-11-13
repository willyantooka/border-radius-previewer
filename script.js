function atualizar(){
    const tl = document.getElementById("tl").value
    const tr = document.getElementById("tr").value
    const br = document.getElementById("br").value
    const bl = document.getElementById("bl").value
    const tlv = document.getElementById("tlv").value
    const trv = document.getElementById("trv").value
    const brv = document.getElementById("brv").value
    const blv = document.getElementById("blv").value

    const valores = tl + "px " + tr + "px " + br + "px " + bl + "px " + "/ "+ tlv + "px " + trv + "px " + brv + "px " + blv + "px";
    console.log(valores)
    document.getElementById("caixa").style.borderRadius = valores;
    document.getElementById("resultado").textContent = "border-radius: " + valores + ";";

}

function copiar(){
    const texto = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(texto);
}

atualizar();