// Função para click em botão de light
function toggleMode() {
  // Criação de variável (objeto)
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  // }
  
  // Forma simplificada do código acima, acrescentando interação de imagens
  // Troca das classes
  html.classList.toggle('light')
  
  // Pegando a tag img
  const img = document.querySelector("#profile img") 

  // Substituição de imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}  
