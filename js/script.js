// =================================
// QUALBRIDGE WEBSITE v0.2
// JAVASCRIPT
// =================================


document.addEventListener("DOMContentLoaded", function(){

    console.log("QualBridge Website Loaded");


    // FAQ Accordion

    document.querySelectorAll(".faq-question").forEach(question=>{

        question.addEventListener("click",()=>{

            const item = question.parentElement;

            item.classList.toggle("active");

        });

    });



    // Back To Top Button

    const backToTop = document.getElementById("backToTop");


    if(backToTop){

        window.addEventListener("scroll", ()=>{

            if(window.scrollY > 500){

                backToTop.classList.add("show");

            }else{

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click",()=>{

            window.scrollTo({

                top:0,
                behavior:"smooth"

            });

        });

    }


});