let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

const displayTime =()=> {
          let  data = new Date();
//  git by hour,min, sec code
          let hh = data.getHours();
          let  mm = data.getMinutes();
          let ss = data.getSeconds();
          
          // rotote code
          let hrotota = 30 * hh + mm/2;
          let mrotota = 6 * mm;
          let srotota = 6 * ss ;

          hr.style.transform= `rotate(${hrotota}deg)`;
          min.style.transform= `rotate(${mrotota}deg)`;
          sec.style.transform= `rotate(${srotota}deg)`;
          
}
setInterval( displayTime, 1000)