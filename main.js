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

        function smoothScroll(target,duration){
 
            let tar = document.querySelector(target);
            let tarpos = tar.getBoundingClientRect().top;
            let start = window.pageYOffset;
            let dis = tarpos-start;
            let startTime = null;
        
        
        function animation(currentTime){
        
            if(startTime===null)
            startTime=currentTime;
            let timeCollapse = currentTime - startTime;
            let run = easeInOutQuad(timeCollapse,start,dis,duration);
            window.scrollTo(0,run);
        
            if(timeCollapse<duration){
                requestAnimationFrame(animation);
            }
        }
        
        function easeInOutQuad(t, b, c, d) {   //gizma website for easing equations
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        }
        
            requestAnimationFrame(animation);
        
        }
        
        
        let clickMe1=document.querySelector('#clickme1');
        
        clickMe1.addEventListener('click',function(){
            smoothScroll('#menu',1000);
        })

        let clickMe2=document.querySelector('#clickme2');
        
        clickMe2.addEventListener('click',function(){
            smoothScroll('#aboutus',1500);
        })

        let clickMe3=document.querySelector('#clickme3');
        
        clickMe3.addEventListener('click',function(){
            smoothScroll('#contact',2000);
        })
        
        
        


