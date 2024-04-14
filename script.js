let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let exyear = document.getElementById('exyear');
let cyear = document.getElementById('cyear');
function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

function displayLife(){
  let date = new Date();
  let bday = new Date("2002-07-15")
  let birthYear = bday.getFullYear()
  let dateYear = date.getFullYear()
  
  let diff = new Date(date.getTime() - bday.getTime())
  
  // let yy = dateYear - birthYear
  let yy = diff.getFullYear()-1970
  let mm = diff.getMonth()

  let yRotation = 6*yy + mm/2
  let mRotation = 30*mm

  hr.style.transform = `rotate(${yRotation}deg)`
  exyear.style.transform = `rotate(${yRotation}deg)`
  min.style.transform = `rotate(${mRotation}deg)`
  cyear.querySelector('h1').textContent = `${yy} years`
  let temp= yRotation-90
  cyear.style.transform = `rotate(${temp}deg)`
  cyear.querySelector('h1').transform = `rotate(${-1*temp}deg)`
}

setInterval(displayLife, 1000);