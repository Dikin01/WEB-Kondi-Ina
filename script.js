var clos = document.getElementById("Close");
var win = document.getElementById("Win");
function none(){
    win.style.display = "none";
}

clos.onclick = function(){
   win.style.opacity = "0";
   setTimeout(none, 1000);
}