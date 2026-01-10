// Component
class ItemCarrinho {
  getNome() {}
  getPreco() {}
}

// Leaf / Folha
class ProdutoSimples extends ItemCarrinho {
  constructor(nome, preco) {
    super();
    this.nome = nome;
    this.preco = preco;
  }

  getNome() {
    return this.nome;
  }

  getPreco() {
    return this.preco;
  }
}

// Kit
class Kit extends ItemCarrinho {
  constructor(nome, itens = []) {
    super();
    this.nome = nome;
    this.itens = itens;
  }

  getNome() {
    return this.nome;
  }

  getDescricao() {
    return this.itens.map(item => item.getNome()).join(", ");
  }

  getPreco() {
    let total = 0;

    for (let item of this.itens) {
        total += item.getPreco();
    }

    return total;
  }  
}

// Cadastro de itens para compor o Catálogo
const catalogo = [];

const creme = new ProdutoSimples("Creme para mãos", 20);
const perfume = new ProdutoSimples("Perfume", 80);
const hidratante = new ProdutoSimples("Hidratante", 25);

const kitAutocuidado = new Kit("Kit Autocuidado", [
  hidratante,
  hidratante,
  creme
]);

catalogo.push(creme, perfume, kitAutocuidado);

// Carrinho
const carrinho = [];

const listaProdutos = document.getElementById("listaProdutos");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalSpan = document.getElementById("total");

// Catálogo
function atualizarCatalogo() {
  listaProdutos.innerHTML = "";

  catalogo.forEach((item) => {
    const li = document.createElement("li");

    let texto = `${item.getNome()} - R$ ${item.getPreco()}`;

    if (item instanceof Kit) {
      texto = `${item.getNome()} (Contém: ${item.getDescricao()}) - R$ ${item.getPreco()}`;
    }

    li.textContent = texto;

    const botaoAdicionar = document.createElement("button");
    botaoAdicionar.textContent = "Adicionar";
    botaoAdicionar.onclick = () => adicionarAoCarrinho(item);

    li.appendChild(botaoAdicionar);
    listaProdutos.appendChild(li);
  });
}

// Carrinho
function adicionarAoCarrinho(item) {
  carrinho.push(item);
  atualizarCarrinho();
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";

  carrinho.forEach((item, index) => {
    const li = document.createElement("li"); // <li>
    li.textContent = `${item.getNome()} - R$ ${item.getPreco()}`;

    const botao = document.createElement("button");
    botao.textContent = "Remover";
    botao.onclick = () => removerDoCarrinho(index);

    li.appendChild(botao);
    listaCarrinho.appendChild(li);
  });

  atualizarTotal();
}

function atualizarTotal() {
  const total = carrinho.reduce(
    (soma, item) => soma + item.getPreco(),
    0
  );
  totalSpan.textContent = total;
}

// Inicializa
atualizarCatalogo();
