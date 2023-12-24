const barsBtn = document.querySelector('.bars')
const shtora = document.querySelector('.shtora')

barsBtn.addEventListener('click', (target)=>{
    // shtora.style.transform = "translateY(0%)"
    if(shtora.style.transform === ''){
        shtora.style.transform = 'translateY(0%)'
        barsBtn.className = 'fa-solid fa-xmark bars'
    }else if(shtora.style.transform !== ''){
        shtora.style.transform = ''
        barsBtn.className = 'fa-solid fa-bars bars'
        // console.log(barsBtn.classList);
    }
    console.log(shtora.style.transform);
})