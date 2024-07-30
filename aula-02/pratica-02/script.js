function calcular(event){
    event.preventDefault();
    const nota = Number(document.getElementById("nota").value);
    const aluno = document.getElementById("aluno").value;
    const resultado = document.getElementById("resultado");

    if (nota < 0 || nota > 10 || !aluno || !nota){
        resultado.innerHTML = `<span class="reprovado">Dados Inválidos</span>`;
    }else if (nota > 7){
        resultado.innerHTML = `<p>${aluno} tirou a nota ${nota}.</p> <span class="aprovado">Aluno Aprovado</span>`;
    }else {
        resultado.innerHTML = `<p>${aluno} tirou a nota ${nota}.</p>  <span class="reprovado">Aluno Reprovado</span>`;
    }

}