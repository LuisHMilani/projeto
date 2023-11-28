function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // subistituir a imagem
  if (html.classList.contains("light")) {
    // se tiver a light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // pegar a tag img
  const alt = document.querySelector("#profile img")

  // subistituir a descricao
  if (html.classList.contains("light")) {
    // se tiver a light mode, adicionar a descricao light
    alt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro e blusa preta, sem barba e fundo azul."
    )
  } else {
    // se tiver sem light mode, manter a descricao normal
    alt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
