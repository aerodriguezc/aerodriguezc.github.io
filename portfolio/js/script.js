document.getElementById('projects').addEventListener('click', function () {
    let boxContainer = document.getElementById('boxContainer');
    boxContainer.classList.toggle('hidden');
});


document.querySelectorAll('.description input').forEach(
    i => {
        i.addEventListener('click', function(){
            let modalVideo = document.querySelectorAll('.modal video')[0];
            modalVideo.src = i.src;

            let modal = document.querySelectorAll('.modalContainer')[0];
            modal.classList.toggle('hidden');
        })
    }
)


AddPathToLinks();

let modal = document.getElementsByClassName('modalContainer')[0];
window.onclick = function (event) {
    if (event.target == modal) {
        if(!modal.classList.contains('hidden')){
            modal.classList.toggle('hidden');
        }
    }
}






function AddPathToLinks() {
    let projects = document.querySelectorAll('.project');
    projects.forEach(p => {
        let h3 = p.getElementsByTagName('h3')[0];
        let links = p.querySelectorAll('.images a');
        links.forEach(l => {
            let img = l.children[0];
            l.href = img.src;
            l.dataset.lightbox = h3.innerText;
        })
    })
}
