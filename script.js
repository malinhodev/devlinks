function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.jpeg")
        localStorage.setItem("light", 1)
    }else{
        img.setAttribute("src", "./assets/avatar.jpeg")
        localStorage.removeItem("light")
    }
}

function loadTheme() {
    const lightMode = localStorage.getItem("light");
  
    if (lightMode) {
      toggleMode();
    }
  }
  
  loadTheme();
