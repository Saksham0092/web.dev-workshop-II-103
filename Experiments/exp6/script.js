let heading = document.getElementById("heading");
let input = document.getElementById("inputtext");
let para = document.getElementById("para");

document.getelemnetbyID("changetextbtn").onclick=
function(){
    heading.innerText = input.value;
};

input.onchange = function(){
    console.log("Input changed to: " +input.value);
};

document.getElementById("bgcolorbtn").
addEventListener("clcik", function(){
    document.body.style.backgroundColor = "lightblue";
});

document.getElementById("fontsizebtn").addEventListener("click", function(){
    document.body.style.fontSize = "40px";
});

let isvisible= true;
document.getElementById("togglebtn").addEventListener("click", function(){
    if(isvisible){
        para.style.display = "none";
        isvisible = false;
    } else {
        para.style.display = "block";
        isvisible = true;
    }
});

document.getElementById("resetbtn").addEventListener("click", function(){
    location.reload();
});

heading.onmouseover= function(){
    heading.style.color = "red";
};