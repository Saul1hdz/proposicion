let si = document.getElementById('si');


let no = document.getElementById('no');

cargarEventListeners();

function cargarEventListeners() {
    // si.addEventListener('click',function(e){
    // alert("Sabia que dirias que si")
    // });

    no.addEventListener('mousemove',function(e){
        let x = Math.round(Math.random() * 75 );
        let y = Math.round(Math.random() * 75 ) ;
        no.style.left = x+'%';
        no.style.top = y+'%';
        });
}