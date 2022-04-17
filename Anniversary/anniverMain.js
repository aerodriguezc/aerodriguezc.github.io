function Show(id) {
    let element = document.getElementById(id);
    element.style.display = "block";
    element.classList.add("container");
    element.classList.add("text-center");
    

    let divVideo = document.getElementById('idDivVideo')

    let divVideoDisplay = divVideo.style.display;

    if (divVideoDisplay !== "none") {
        
        divVideo.style.display = "none";
    }

}

$(document).ready(function(){
    $("p").click(function(){
      
    });
});