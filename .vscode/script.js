function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir imagem
  if (html.classList.contains('light')){
    //se estiver light mode,  adicionar imagem light
    img.setAttribute("src", "./assets/avatar-priscila-light.jpeg")
  } else {
    // set tiver sem light mode ,manter a  image normal
    img.setAttribute("src", "./assets/avatar-priscila.jpeg") 
  }
}
