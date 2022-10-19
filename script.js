let block = document.querySelector('#block');
let hole = document.querySelector('.hole');
let character = document.querySelector('.character');
let jumping = 0;
let counter=0;

hole.addEventListener('animationiteration', ()=>{
    let random = -((Math.random() * 300) + 200);

    hole.style.top = random + 'px';
    counter++;
});

// gravity
setInterval(()=>{
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if(jumping == 0){
        character.style.top = (characterTop + 3) + 'px';
    }

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeLeft = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));

    let cTop = -(500 - characterTop);

    if(characterTop > 480 || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeLeft) || (cTop > holeLeft + 130)))){
        alert('Game Over!!!, score : '+counter);
        counter = 0;
        character.style.top = 100 + 'px';
    }

    
}, 10);

// jump
const jump = () => {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(()=>{
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if(characterTop > 6){
            character.style.top = (characterTop - 3) + 'px';
        }
        // character.style.top = (characterTop - 5) + 'px';
        if(jumpCount > 20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount= 0;
        }
        jumpCount++;
    }, 10);
    // let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    //     if(characterTop > 6 && jumpCount < 5){
    //         character.style.top = (characterTop - 5) + 'px';
    //     }
    //     // character.style.top = (characterTop - 5) + 'px';
    //     if(jumpcount > 0){
    //         // clearInterval(jumpInterval);
    //         jumping = 0;
    //         jumpCount= 0;
    //     }
    //     jumpCount++;
};