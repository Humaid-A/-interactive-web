function funcShow(){
alert("Welcome to the interactive web page!");
}
function changeBackgroundColor() {
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
document.addEventListener('click', changeBackgroundColor);










