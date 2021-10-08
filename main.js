//criar localização da nav (onde dizia close)
let nave = document.querySelector('#wrapper>header>nav');
//remover a nav
nave.remove();


//criar localização
let target = document.querySelector('#controlers>article>h2');
//mudar o texto
target.innerHTML="FBAUP"
//mudar o texto para vermelho
target.style.color = 'red';

//////criar o novo atributo

//possibilidade 1 (substitui todo o texto)
//target.innerHTML = '<a href = "https://sigarra.up.pt/fbaup/pt/web_page.inicial"> Faculdade de Belas artes da Univesidade do Porto</a>';

//possibilidade 2 (acrescenta à frente)
let newLink = document.createElement("a");
newLink.setAttribute("href","https://sigarra.up.pt/fbaup/pt/web_page.inicial");
newLink.innerHTML = "Faculdade de Belas Artes da Universidade do Porto"
//colocar atributo no local
target.appendChild(newLink);

//////mudar cor de fundo
//criar localização do titulo
let titulo = document.querySelector('h1')

//mudar cor de fundo do título para vermelho
titulo.style.backgroundColor = "#FF0F0F";
//mudar cor do titulo para branco
titulo.style.color = 'white';
