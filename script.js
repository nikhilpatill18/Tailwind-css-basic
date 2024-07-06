let a=document.getElementById("navDailog");
function HandleMenu(){
    a.classList.toggle('hidden');
}  

const trsnalr=-48*4;
const trsnarl=36*4;

function setUpIntersectionObserver(element,isLTR,speed){
    const intersectioncallBack=(enteries)=>{
    const isIntersecting=enteries[0].isIntersecting;
     if(isIntersecting){
        document.addEventListener("scroll",scrollhandler)
     }
     else {
        document.removeEventListener("scroll",scrollhandler)
     }
    }
    let intersectionObserver=new IntersectionObserver(intersectioncallBack);
    intersectionObserver.observe(element)
    function scrollhandler(){
        let traslatex=(window.innerWidth-element.getBoundingClientRect().top)*speed
        let totaltransalte=0;
        if(isLTR){
            totaltransalte=traslatex+trsnalr;
        }
        else {
            totaltransalte=-(traslatex+trsnarl)
        }
        element.style.transform=`translateX(${totaltransalte}px)`
    }
}
const line1=document.querySelector("#line1"); 
const line2=document.querySelector("#line2"); 
const line3=document.querySelector("#line3"); 
setUpIntersectionObserver(line1,true,0.15)
setUpIntersectionObserver(line2,false,0.15)
setUpIntersectionObserver(line3,true,0.15)
