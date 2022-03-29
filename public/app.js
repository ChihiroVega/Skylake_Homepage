let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {

        logoSpan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add('active');  
            }, (idx + 1) * 400)
        })
        
        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');  
                }, (idx + 1) * 50)
            })  
        },2000)

        setTimeout(() => {
            intro.style.top = '-100vh';

        }, 2300)

    })
})

function copy1ST() {
    navigator.clipboard.writeText("1ST.SKYLAKE.MOE");
}

function copyMC1() {
    navigator.clipboard.writeText("MC1.SKYLAKE.MOE");
    document.getElementById("MC1").innerHTML = "복사 완료!";
}

function copyMC2() {
    navigator.clipboard.writeText("MC2.SKYLAKE.MOE");
    document.getElementById("MC2").innerHTML = "복사 완료!";
}