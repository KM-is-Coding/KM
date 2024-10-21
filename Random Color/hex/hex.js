const color = document.getElementById('color');
const submit_btn = document.getElementById('submit');

const hexContent = [0,1,2,3,4,5,6,7,8,9,"A","B",'C','D','E','F'];

submit_btn.onclick = function(){
    let hexCode = ["#"];
    for (let i = 0; i < 6; i++){
        rndNum = Math.floor(Math.random() * hexContent.length);
        hexCode.push(hexContent[rndNum]);
    }
    console.log(hexCode.join(''));
    document.body.style.background = hexCode.join('');
    color.textContent = hexCode.join('');
}