let btn=document.getElementById("btn1");
let text1=document.getElementById("mh1");
let text2=document.getElementById("mh2");
let text3=document.getElementById("mh3");
btn.onclick=function(){
    let min=1;
    let max=6;
    let res1=(Math.floor(Math.random()*max))+min;
    text1.innerHTML=res1;
    let res2=(Math.floor(Math.random()*max))+min;
    text2.innerHTML=res2;
    let res3=(Math.floor(Math.random()*max))+min;
    text3.innerHTML=res3;
}