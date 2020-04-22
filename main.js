const logo=document.querySelectorAll("#logo path")

for(let i=0;i<logo.length;i++){
    console.log(`length of ${i} th path is ${logo[i].getTotalLength()}`)
}

window.sr = ScrollReveal();
            sr.reveal('.menu',{
            duration:2000,
            origin:'top',
            distance:'300px'
            
        })

        sr.reveal('.showcase-left',{
            duration:2000,
            origin:'top',
            distance:'300px'
        })

        sr.reveal('.back',{
            duration:3000,
            origin:'bottom',
            distance:'300px'
        })

        sr.reveal('.fa',{
            duration:2000,
            delay:2000,
            origin:'bottom',
        })

        sr.reveal('.pizza',{
            duration:2000,
            origin:'left',
            distance:'300px',
            viewFactor: 0.2
        })

        sr.reveal('.pasta',{
            duration:2000,
            origin:'right',
            distance:'300px',
            viewFactor: 0.4
        })

        sr.reveal('.menu-pizza-right',{
            duration:2000,
            origin:'right',
            distance:'300px',
            viewFactor: 0.2
        })
        
        sr.reveal('.menu-pasta-left',{
            duration:2000,
            origin:'left',
            distance:'300px',
            viewFactor: 0.4
        })

        sr.reveal('.two',{
            duration:2000,
            origin:'left',
            distance:'300px',
            viewFactor: 0.2
        })

        sr.reveal('.menu-burger-right',{
            duration:2000,
            origin:'right',
            distance:'300px',
            viewFactor: 0.4
        })

        sr.reveal('.burger',{
            duration:2000,
            origin:'left',
            distance:'300px',
            viewFactor: 0.4
        })



