window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});
var clicks = (e) => {
    e.preventDefault();
    var menubar = document.getElementsByClassName('menu');
    for(var i=0;i<menubar.length;i++) {
        if(menubar[i].style.display === "block") {
            menubar[i].style.display = "none";
        }
        else {
        menubar[i].style.display = "block";
        }
    }
    console.log("clicked");
}