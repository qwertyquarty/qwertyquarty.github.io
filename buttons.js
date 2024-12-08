const buttons = [...document.querySelectorAll("#buttons>button")]
const divs = [...document.querySelectorAll("#texts>div")]

function select(id) {
  let id_btn = document.getElementsByClassName(id)[0]
  let id_div = document.getElementById(id)

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active")
  }
  id_btn.classList.add("active")

  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none"
  }
  id_div.style.display = ""
}

