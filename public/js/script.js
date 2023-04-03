// Script for collapsing & displaying the contents

var coll = document.getElementsByClassName("collapsible");
var i;

// a loop to scan for all elements that have the class name collapsible in the document
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() { //an Event Listener to check if the button has been clicked to toggle it as active through a function and change the content's div height
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null; //closes the content div if the height is max when the button is clicked.
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; //opens up the div with "content" class - smoothly with the .scrollHeight px
    }
  });
}
