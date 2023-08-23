const toggleButton = document.querySelector('.on-light');

toggleButton.addEventListener('click', toggleLight);

function toggleLight() {
  const lightBulb = document.querySelector('#lightBulb');
  const imgSrc = lightBulb.src;

  if (imgSrc === 'http://127.0.0.1:5500/fe-kurs-13/lightbulb.png') {
    lightBulb.src = 'http://127.0.0.1:5500/fe-kurs-13/lightbulbOn.png';
  } else {
    lightBulb.src = 'http://127.0.0.1:5500/fe-kurs-13/lightbulb.png'
  }
}


// const numara = 15;
// const numara2 = 10

// if (numara > 15) {
//   console.log('5ten büyük');
// } else if (typeof numara == 'string') {
//   console.log('5ten küçük');
// } else if (numara == '10') {
//   console.log('evet eşit');
// } else {
//   console.log('yok');
// }

// if (numara === 15) {
//   if (numara2 === 10) {
//     console.log('çooook eşit');
//   }
// }
