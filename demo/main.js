import {main, canvas, ctx, image, ground, floorList, floor} from './variable.js';

console.log(main)
document.addEventListener('keydown', (event)=>{
    if(event.key == 'ArrowRight'){
        main.moveRight= true;
        main.directRight = true;
        main.directLeft = false;
    }else if(event.key == 'ArrowLeft'){
        main.moveLeft= true;
        main.directRight = false;
        main.directLeft = true;
    };
    if(event.key == ' '){
        main.isAtack = true;
    };
    if(event.key == 'a'){
        main.isDeath = true
    }
});
document.addEventListener('keyup', (event)=>{
    if(event.key == 'ArrowRight'){
        main.moveRight= false;
    }else if(event.key == 'ArrowLeft'){
        main.moveLeft= false;
    }
    if(event.key == ' '){
        main.isAtack = false;
    }
})