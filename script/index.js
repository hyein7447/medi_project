const pop_up_bg = document.querySelector('.pop_up_bg')
const pop_up1 = document.querySelector ('.pop_up1')
const pop_up2 = document.querySelector('.pop_up2')
const submit_btn = document.querySelector ('.submit')
console.log (pop_up_bg,pop_up1,pop_up2)

setTimeout (()=>{
    pop_up1.style.opacity = '0';
    pop_up1.style.transition = 'opacity 0.5s ease';
    pop_up1.style.display = 'none'
    pop_up2.style.opacity = '1'
    pop_up2.style.transition = 'opacity 1s ease';
},3000)

submit_btn.addEventListener('click',()=>{
    pop_up2.style.display = 'none'
    pop_up_bg.style.opacity = '0';
    pop_up_bg.style.transition = 'opacity 1s ease';
    setTimeout (()=>{
        pop_up_bg.style.display = 'none'
    },500)
})