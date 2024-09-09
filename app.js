function pesquisar() {
    // Declara uma função chamada 'pesquisar'. Esta função será responsável por gerar a lista de resultados da pesquisa.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se o campoPesquisa for uma string sem nada 
    if (campoPesquisa == "") {
        section.innerHTML = "Desculpe, digite novamente"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma variável chamada 'resultados' como uma string vazia. 
    // Esta variável será utilizada para armazenar o HTML gerado para cada resultado da pesquisa.
    let resultados = "";
    
    // Fará com que, após o input, tudo que fora digitado passará a ter letra minuscula, bem como o resultado, não importando mais a forma como o usuário digite/está salvo na página de dados
    // Tudo fica tendo letra minúscula
    let titulo = "";
    let descricao = "";
    let tags = "";
        // Inicia um loop 'for...of' para percorrer cada elemento (dado) dentro do array 'dados'.
        // A cada iteração, a variável 'dado' representará um objeto com as informações de um resultado.
    for (let dado of dados) {
        // as variáveis declaradas fora do for, agora são usadas para definir que os parágrafos terão letra minúscila
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Includes é responsável por retornar se o que for digitado no campoPesquisa é true ou false 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))

        resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="https://www.youtube.com/watch?v=v18Gt17ogTA">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>

                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `
        // Concatena uma nova div com a classe 'item-resultado' à variável 'resultados'.
        // Dentro da div, cria um título (h2) com um link para um vídeo no YouTube (o link pode ser personalizado para cada resultado).
        // Em seguida, adiciona um parágrafo com a descrição do resultado e um link para mais informações.
        // A propriedade 'target="_blank"' faz com que o link se abra em uma nova aba.
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
    // Seleciona o elemento HTML com o id 'resultados-pesquisa' e atribui o conteúdo da variável 'resultados' a ele.
    // Isso substitui o conteúdo existente da seção pelos resultados da pesquisa gerados.
}

let section = document.getElementById("resultados-pesquisa");
// Seleciona o elemento HTML com o id 'resultados-pesquisa' e armazena-o na variável 'section'.
// Este elemento será utilizado para exibir os resultados da pesquisa.



