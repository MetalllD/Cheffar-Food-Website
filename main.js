//animation of title
const logo=document.querySelectorAll("#logo path")

for(let i=0;i<logo.length;i++){
    console.log(`length of ${i} th path is ${logo[i].getTotalLength()}`)
}

//scroll reveal
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

        sr.reveal('.qualities',{
            duration:2000,
            origin:'left',
            distance:'300px',
            viewFactor: 0.2
        })

        sr.reveal('.con',{
            duration:2000,
            origin:'bottom',
            distance:'300px',
            viewFactor: 0.2
        })

        sr.reveal('.thank',{
            duration:2000,
            origin:'left',
            distance:'300px',
            viewFactor: 0.2
        })

        //smooth scroll effect
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

        //form validation
        let name=document.querySelector('#name');
        let email=document.querySelector('#email');
        let msg=document.querySelector('#message');
        let form = document.querySelector('#form');

        function alert(message1,className){
            const div=document.createElement('div');
            div.className=`alert alert-${className}`;
            div.appendChild(document.createTextNode(message1));
            const Upper = document.querySelector(".before")
            const Lower = document.querySelector('#form');
            Upper.insertBefore(div,Lower);
            setTimeout(()=>{document.querySelector('.alert').remove()},2000)
        }

        form.addEventListener('submit',(e)=>
        {
            e.preventDefault();

            if(name.value==='' || email.value==='' || msg.value===''){
                alert('Please fill all the fields', 'danger')
            }

            else{
                alert('Message sent','success')
                name.value='';
                email.value='';
                message.value='';
            }
        }
        );
        
        


