const xarakter = document.getElementById('xarakter');
const block = document.getElementById('block');
console.log(xarakter.classList != "animate"); // != оператор неравенство. Проверяет неравны ли value
function jump(){
    if(xarakter.classList != "animate"){  

        xarakter.classList.add("animate");
    }
    setTimeout(function(){                  // Устанавливает таймер по истечению времени. 
      xarakter.classList.remove("animate")
    }, 500); // держать 0,5 секунд на воздухе 
    
}
const checkDead = setInterval(function(){
    const xarakterTop = parseInt(window.getComputedStyle(xarakter).getPropertyValue("top")); // getComputedStyle Выбирает Css элементы. 
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));     //getPropertyValue Добавляет элемент
    if(blockLeft < 10 && blockLeft > 0 && xarakterTop > 130){
        block.style.animation ="none";
        block.style.display = "none"
          alert("Uduzduz")
    }

}, 10);
console.log(checkDead);
