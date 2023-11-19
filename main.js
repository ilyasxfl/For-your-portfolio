let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
let value = scrollY
stars.style.left = value + 'px';
moon.style.top = value *4 + 'px';
mountains3.style.top = value *2 + 'px';
mountains4.style.top = value *1.5  + 'px';
river.style.top = value  *0.160 + 'px';
boat.style.left = value *3 + 'px';
nouvil.style.fontSize = value  + 'px';
if (scrollY >= 58.56){
    nouvil.style.fontSize = 58.56 + 'px' ;
    nouvil.style.position = 'fixed' ;
    if (scrollY >=561){
nouvil.style.display = 'none' ;
    }else{
    nouvil.style.display = 'block' ;
}
if(scrollY >= 163.50){
    document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
}else{
    document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'  
}
}

}
