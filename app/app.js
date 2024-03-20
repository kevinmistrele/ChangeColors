const btnClick = document.getElementById("btn-click")
const btnType = document.getElementById("btn-type");
const pSpan = document.getElementById("p-span");
const idColor = document.getElementById("id-color")
var colorTypes = ['Simple Hex', 'RGB', 'Name'];
var currentIndex = 1;

btnClick.addEventListener("click", ()=>{
    changeColor();
});

btnType.addEventListener("click", ()=>{
    var currentColorType = colorTypes[currentIndex];
    currentIndex = (currentIndex + 1) % colorTypes.length;
    btnType.textContent = currentColorType;
});



function changeColor(){

    if(btnType.textContent === "Simple Hex"){
        var hexaColor = '#' + Math.floor(Math.random()*1677215).toString(16);
        idColor.innerText = hexaColor;
        btnType.style.color = hexaColor;
        pSpan.style.backgroundColor = hexaColor;
    }else if(btnType.textContent === "Name"){
        var colorNames = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'black', 'white'];
        var randomNameColor = colorNames[Math.floor(Math.random()* colorNames.length)];
        idColor.innerText = randomNameColor;
        btnType.style.color = randomNameColor;
        pSpan.style.backgroundColor = randomNameColor;
    }else if(btnType.textContent === "RGB"){
        var r = Math.floor(Math.random ()* 250);
        var g = Math.floor(Math.random ()* 250);
        var b = Math.floor(Math.random ()* 250);
        var randomRGBColor = `RGB(${r} , ${g}, ${b})`;
        idColor.innerText = randomRGBColor;
        btnType.style.color = randomRGBColor;
        pSpan.style.backgroundColor = randomRGBColor;

    }

    
    
    
    
}
