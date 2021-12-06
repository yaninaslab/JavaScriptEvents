
//1 The following two functions set mouse over and mouse out actions.
function mouseOver() {
    
    this.style.backgroundColor = "salmon";
}

function mouseOut() {
    this.style.backgroundColor = "lightsalmon";
  }
// We're grabbing elements from the page
var menu_items = document.querySelectorAll(".menu_item");
// In the for loop we make sure that all elements are used
for(var i=0; i < menu_items.length; i++) {
// The event listener listens to the specified events    
menu_items[i].addEventListener('mouseover', mouseOver);
menu_items[i].addEventListener('mouseout', mouseOut);
}


//2 This function is called when Search button is clicked. 
function click_me() {

    this.style.backgroundColor = "red";
}
// Same, we're grabbing an element from the page
var btn_clicked = document.getElementById('search_btn');
// We add Event Listener to that button
btn_clicked.addEventListener('click', click_me);


//3 This function is called when space is pressed in the input field.
function press_space(e) {
    //Space key has a code 32
    if(e.keyCode == 32) {
        alert("Space was pressed!");

    }
}
// Same logic, grabbing element from the page and adding Event Listener to that event.
var text_input = document.getElementById('press_space');
text_input.addEventListener('keypress', press_space);

//4 This function changes the background color in 15 sec. 
function make_pink() {
    document.body.style.background = "pink";
}
setTimeout(make_pink, 15000);