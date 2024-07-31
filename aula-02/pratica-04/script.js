function calcular(event){
    event.preventDefault();
    const nota = document.getElementById("nota").value;

    const condicaoAnuno = nota > 6 ? "Aluno aprovado" : "Aluno Reprovado";

    alert(condicaoAnuno);
}