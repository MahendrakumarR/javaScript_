const colorContainer = document.getElementById('color');
const flipperbtn = document.getElementById('flip-button');

const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33F1", "#33F1FF", "#F1FF33", "#FF3389", "#33FFC1", "#E433FF", "#C1FF33"];

flipperbtn.addEventListener('click',function(){
  const any = Math.floor(Math.random() * colors.length);
  const anycolor = colors[any];
  colorContainer.textContent = anycolor;
  document.body.style.backgroundColor = anycolor;

})

