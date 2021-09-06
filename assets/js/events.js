'use strict';

let x = 0;
let y = 0;

let isCursorNone = false;
let timerID = undefined;


document.body.addEventListener('mousemove', (e)=>{
  // console.log(e.x);
  // console.log(e.y);
  
  // if((e.clientX != x || e.clientY != y) && isCursorNone){
  //   console.log('movemouse');
    // document.body.classList.remove('cursorNone');
  //   clearTimeout(timerID);
  //   isCursorNone = !isCursorNone;
  // }
  document.body.classList.remove('cursorNone');
  clearTimeout(timerID);

  timerID = setTimeout(()=>{
    // if(!isCursorNone) {
      document.body.classList.add('cursorNone');
      isCursorNone = !isCursorNone;
  // }
}, 1200);
  
});
