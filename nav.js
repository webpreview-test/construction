
var a = 1;
var m = document.getElementById("more")
var hovering = false;

function check(){
    setTimeout (() => {
        if (!hovering){
            m.style.visibility = "hidden";
            m.style.opacity = "0";
        };
    
    }, 100);
}

$("#morebtn").mouseover(function(){
    m.style.visibility = "visible";
    m.style.opacity = "1";
});

$("#morebtn").mouseleave(function(){
    check();
});

$("#more").mouseover(function () {
    hovering = true;
});
$("#more").mouseleave(function () {
    hovering = false;
    setTimeout (() => {
        m.style.visibility = "hidden";
        m.style.opacity = "0";
    }, 100);
});

function more(){
    var  m = document.getElementById("more")
    if (a == 1){
        m.style.visibility = "visible"
        m.style.opacity = "1"
        return a = 0
    } else{     
        m.style.visibility = "hidden"
        m.style.opacity = "0"
        return a = 1
    }
}
