const colors = ['red','green','yellow','orangered','purple','teal','blue'];

const color = document.getElementById('color');
const submit_btn = document.getElementById('submit');

submit_btn.onclick = function(){
    rndNum = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[rndNum];

    color.textContent = colors[rndNum];
}
