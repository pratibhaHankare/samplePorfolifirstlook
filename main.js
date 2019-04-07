// const TypeWriter = function(txtElement,words,wait=3000){
//     this.textElement = txtElement;
//     this.words = words;
//     this.txt ='';
//     this.wordIndex =0;
//     this.wait = parseInt(wait,10);
//     this.type();
//     this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type= function(){
//     // current index of word
//     const current = this.wordIndex % this.words.length;
//     console.log(current);
//     // get full text of the current word
//     const fullTxt = this.words[current];
    
//     //check if deleting
//     if(this.isDeleting){
//         // remove char
//         this.txt= fullTxt.substring(0,this.txt.length - 1);
//     }else{
//         //add char
//         this.txt = fullTxt.substring(0,this.txt.length + 1);
//     }


//     // insert txt into the element
//     document.querySelector('.txt-type').innerHTML = `<span class="txt">${this.txt}</span>`;
//         // Initial Type speed
//         if(!this.isDeleting && this.txt === fullTxt){
//             //Make pause at end
//             var typeSpeed = this.wait;
//             // set delete to true
//             this.isDeleting = true;
//         } else if( this.isDeleting && this.txt === ''){
//             this.isDeleting = false;
//             // Move to next word
//             this.wordIndex ++;
//             // Pause before  start typeing
//             typeSpeed = 500;
//         }
//     setTimeout( ()=>this.type(),typeSpeed);
// } // end:Prototype




//es6
class TypeWriter{
    constructor(txtElement,words,wait=3000){
        debugger;
        this.textElement = txtElement;
        this.words = words;
        this.txt ='';
        this.wordIndex =0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;
    }

    type(){
         // current index of word
         const current = this.wordIndex % this.words.length;
        // get full text of the current word
        const fullTxt = this.words[current];
    
        //check if deleting
        if(this.isDeleting){
            // remove char
            this.txt= fullTxt.substring(0,this.txt.length - 1);
        }else{
            //add char
            this.txt = fullTxt.substring(0,this.txt.length + 1);
        }


    // insert txt into the element
    document.querySelector('.txt-type').innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type speed
        let typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /=2;
        }

        if(!this.isDeleting && this.txt === fullTxt){
            //Make pause at end
            typeSpeed = this.wait;
            // set delete to true
            this.isDeleting = true;
        } else if( this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            // Move to next word
            this.wordIndex ++;
            // Pause before  start typeing
            typeSpeed = 500;
        }
    setTimeout( ()=>this.type(),typeSpeed);
    }
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded',init);

//Init App
function init(){
    const txtElement= document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init Typewriter
    new TypeWriter(txtElement,words,wait);
}