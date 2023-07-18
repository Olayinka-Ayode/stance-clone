let banner = document.querySelectorAll('.banner');
let current = 0;

function cls(){
    for(let i = 0; i < banner.length; i++){
        banner[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === banner.length - 1) current = -1;
    current++;

    banner[current].style.display = "flex";
}

function prev(){
    cls();
    if(current === 0) current = banner.length;
    current--;

    banner[current].style.display = "flex";
}

function start(){
    cls();
    banner[current].style.display = 'flex';
}
start();