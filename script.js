

var highlighterDiv = document.getElementById('highlighter');
var triggers = document.querySelectorAll("div img");

for (var i = 0; i < triggers.length; i++) {
  trigger = triggers[i];
  trigger.addEventListener("mouseenter", function(e) {
    var coords = this.getBoundingClientRect();
    highlighterDiv.style.top = coords.top+"px";
    highlighterDiv.style.left = coords.left+"px";

    highlighterDiv.style.width = coords.width+"px";
    highlighterDiv.style.height = coords.height+"px";
    highlighterDiv.style.opacity = 1;
  });
};
