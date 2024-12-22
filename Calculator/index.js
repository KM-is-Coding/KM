equation = "";
canOper = 0;

function num(value){
    if (equation != "Infinity"){
        equation = equation.concat(value);
        display()
        console.log(equation);
        canOper = 0;
    }
}

function oper(operator){
    if (equation != "Infinity"){
        if (operator == "-"){
            if (equation.length > 0 && canOper < 2 && equation.slice(-1) != "-"){
                equation = equation.concat(operator);
                canOper = 1;
                display();
            }
        }
        if (equation.length > 0 && canOper == 0){
            equation = equation.concat(operator);
            canOper = 1;
            display();
        }
    }
}
function reset(){
    equation = "";
    display()
    console.log(equation);

}
function del(){
    if (equation != "Infinity"){
        equation = equation.slice(0, -1)
        console.log(equation);
        display()
    }
    else{
        equation = "";
        display();
    }
}
function equal(){
    answer = eval(equation);
    equation = String(answer);
    console.log(equation);
    display()
}
function display() {
    const displayElement = document.getElementById('display');
    displayElement.innerHTML = equation; // Update the content
    displayElement.scrollLeft = displayElement.scrollWidth; // Scroll to the end
}



function changeTheme(value){
    switch(value){
        case "1":
            document.documentElement.style.setProperty('--body_bgcolor', '#3B4664');
            document.documentElement.style.setProperty('--body-color', 'white');
            document.documentElement.style.setProperty('--display_bgcolor', '#182034');
            document.documentElement.style.setProperty('--buttons-div_bgcolor', '#232C43');
            document.documentElement.style.setProperty('--button_bgcolor', '#ECE1DD');
            document.documentElement.style.setProperty('--button_fontcolor', '#464D5C');
            document.documentElement.style.setProperty('--button-hover_bgcolor', '#fdfdfd');
            document.documentElement.style.setProperty('--button-shadow_bgcolor', '#A4978E');
            document.documentElement.style.setProperty('--delete_bgcolor', '#637097');
            document.documentElement.style.setProperty('--delete-shadow_bgcolor', '#3D4A6D');
            document.documentElement.style.setProperty('--delete-hover_bgcolor', '#707faf');
            document.documentElement.style.setProperty('--delete_fontcolor', 'white');
            document.documentElement.style.setProperty('--equals_bgcolor', '#D03F2F');
            document.documentElement.style.setProperty('--equals-shadow_bgcolor', '#7F2722');
            document.documentElement.style.setProperty('--equals-hover_bgcolor', '#df4c3c');
            document.documentElement.style.setProperty('--equals_fontcolor', 'white');
            break;

        case "2":
            document.documentElement.style.setProperty('--body_bgcolor', '#dddddd');
            document.documentElement.style.setProperty('--body-color', '#32332E');
            document.documentElement.style.setProperty('--display_bgcolor', '#EFEFEF');
            document.documentElement.style.setProperty('--buttons-div_bgcolor', '#D4CDCD');
            document.documentElement.style.setProperty('--button_bgcolor', '#E4E5E0');
            document.documentElement.style.setProperty('--button_fontcolor', '#3C3B34');
            document.documentElement.style.setProperty('--button-hover_bgcolor', '#f4f4f4');
            document.documentElement.style.setProperty('--button-shadow_bgcolor', '#A29E98');
            document.documentElement.style.setProperty('--delete_bgcolor', '#398388');
            document.documentElement.style.setProperty('--delete-shadow_bgcolor', '#235B5F');
            document.documentElement.style.setProperty('--delete-hover_bgcolor', '#3b9399');
            document.documentElement.style.setProperty('--delete_fontcolor', 'white');
            document.documentElement.style.setProperty('--equals_bgcolor', '#C85403');
            document.documentElement.style.setProperty('--equals-shadow_bgcolor', '#8B3C02');
            document.documentElement.style.setProperty('--equals-hover_bgcolor', '#db5d05');
            document.documentElement.style.setProperty('--equals_fontcolor', 'white');
            break;
        case "3":
            document.documentElement.style.setProperty('--body_bgcolor', '#170629');
            document.documentElement.style.setProperty('--body-color', '#F9DD60');
            document.documentElement.style.setProperty('--display_bgcolor', '#1D0836');
            document.documentElement.style.setProperty('--buttons-div_bgcolor', '#1D0836');
            document.documentElement.style.setProperty('--button_bgcolor', '#331B4C');
            document.documentElement.style.setProperty('--button_fontcolor', '#F9DD60');
            document.documentElement.style.setProperty('--button-hover_bgcolor', '#4e326c');
            document.documentElement.style.setProperty('--button-shadow_bgcolor', '#73258D');
            document.documentElement.style.setProperty('--delete_bgcolor', '#54087C');
            document.documentElement.style.setProperty('--delete-shadow_bgcolor', '#9D2EC8');
            document.documentElement.style.setProperty('--delete-hover_bgcolor', '#661693');
            document.documentElement.style.setProperty('--delete_fontcolor', '#E7CDEF');
            document.documentElement.style.setProperty('--equals_bgcolor', '#00DECC');
            document.documentElement.style.setProperty('--equals-shadow_bgcolor', '#72F2F2');
            document.documentElement.style.setProperty('--equals-hover_bgcolor', '#05c2b2');
            document.documentElement.style.setProperty('--equals_fontcolor', '#005551');
            break;
    }

}