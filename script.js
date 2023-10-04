function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.jpeg")
    }else{
        img.setAttribute("src", "./assets/avatar.jpeg")
    }
}

const changeThemeBtn = document.querySelector("#switch");

function loadTheme() {
    const darkMode = localStorage.getItem("light");
  
    if (darkMode) {
      toggleDarkMode();
    }
  }
  
  loadTheme();

  changeThemeBtn.addEventListener("switch", function () {
    toggleDarkMode();
  
    // Save or remove dark mode from localStorage
    localStorage.removeItem("light");
  
    if (document.body.classList.contains("light")) {
      localStorage.setItem("light", 1);
    }
  });