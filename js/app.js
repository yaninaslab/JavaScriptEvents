
//1
function mouse_over_menu() {
    menu_items_hovered.style.color = "green";
}

var menu_items_hovered = document.getElementsByClassName('menu_item')[1];
//var num_items = menu_items_hovered.length;
    //for(var i=0; i < num_items; i++) 
        menu_items_hovered.addEventListener('mouseover', mouse_over_menu);


document.getElementById("hover").addEventListener("mouseover", mouseOver);
document.getElementById("hover").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("hover").style.color = "green";
}

function mouseOut() {
  document.getElementById("hover").style.color = "blue";
}

//2
function click_me() {

    menu_items_clicked.style.color = "red";
}

var menu_items_clicked = document.getElementsByTagName('a')[0];
menu_items_clicked.addEventListener('click', click_me);

//3
function press_space(e) {
    if(e.keyCode == 32) {
        alert("Space was pressed!");

    }
}
var text_input = document.getElementById('press_space');
text_input.addEventListener('keypress', press_space);