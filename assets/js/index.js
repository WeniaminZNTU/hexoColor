'use strict';
import {color, time} from './DOM.js';


hexoColor();
setInterval(hexoColor, 1000);

function hexoColor(){
  const nowTime = new Date();

  let h = (nowTime.getHours() % 12).toString();
  let m = nowTime.getMinutes().toString();
  let s = nowTime.getSeconds().toString();


  if(h.length < 2){
    // console.log(h);
    h = '0' + h;
    // console.log(h);
  }

  if(m.length < 2){
    m = '0' + m;
  }

  if(s.length < 2){
    s = '0' + s;
  }

  let clockString = h + ':' + m + ':' + s;
  let colorString = '#' + h + m + s;

  time.textContent = clockString;
  color.textContent = colorString;

  document.body.style.background = colorString;
}

