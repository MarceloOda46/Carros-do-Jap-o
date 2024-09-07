function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const termoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();
  
    if (termoPesquisa === "") {
      section.innerHTML = "<p>Busca não encontrada</p>";
      return;
    }
    console.log(termoPesquisa)
    let resultados = false;
  
    dados.forEach(dado => {
      const { titulo, descricao, tags, link } = dado;
      if (titulo.toLowerCase().includes(termoPesquisa) ||
          descricao.toLowerCase().includes(termoPesquisa) ||
          tags.toLowerCase().includes(termoPesquisa)) {
        // Criar um novo elemento usando o DOM para evitar injeção de HTML
        const itemResultado = document.createElement('div');
        itemResultado.classList.add('item-resultado');
        // ... (adicionar o conteúdo do itemResultado)
        itemResultado.innerHTML=`
        <h3>${ titulo }</h3>
        <p>${ descricao }</p>
        <a href="${link}" target="_blank">mais informações</a>
        `
        section.appendChild(itemResultado);
        resultados=true
      }
    });
  
    if (!resultados) {
      section.innerHTML = "<p>Nada foi encontrado</p>";
    }
  }
  