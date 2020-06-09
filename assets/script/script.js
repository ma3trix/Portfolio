const span = document.getElementById("title");
const message = span.textContent

let counter = 0;
let interval = setInterval(function(){
    
    const message_len = message.length;

    if (counter < message_len) {
        counter++;
        span.innerHTML = message.slice(0, counter);
    } else if (counter == message_len) {
        interval.clearInterval()
    }
}, 50)


//App Theme

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;