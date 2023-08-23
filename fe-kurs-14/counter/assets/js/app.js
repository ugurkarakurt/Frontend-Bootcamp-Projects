const counter = (function () { // IIFe fonksiyon kullanıyorum. Nedenim memeory kullanımı ile alakalı. Moduler çalışmak istiyorum. 

  // Degiskenler   // =====>> Değişkenlerimi bi arada tutarak tanımlıyorum. Function scope ve function execution context olmasını sağlıyorum. Bu nedenle function env içinde tutulmuş olacak. Global tanımlamadan kaçındım. 

  const screen = document.querySelector('.js-screen');
  const decreaseBtn = document.querySelector('.js-decrease');
  const increaseBtn = document.querySelector('.js-increase');
  const resetBtn = document.querySelector('.js-reset');


  // Event Listem   // ======>> Burada eventlerim topluca ve kontrol etmesi kolay olsun diye bir arada tutulduğu bir fonksiyonum var. Hiç biri bir kalıp değil isimlendirmeler tamamen keyfi. 

  const _eventListeners = function () {
    decreaseBtn.addEventListener('click', _subtraction); // Eventlerin parametre olarak aldığı fonksiyonları ayrı yazarak geçiyorum. 
    increaseBtn.addEventListener('click', _addition);
    resetBtn.addEventListener('click', _reset);
  }

  // çıkarma işlemi  // Çok okunabilir çok anlaşılır isimlerle ayrı ayrı yazdığım tertemiz bir yazım şekli. 1 tane işlem için bile fonksiyon mu yazılır demiyoruz ve yazıyoruz. Çünkü IIFE içinde function expression şeklinde tanımladığım için bellekte zaten yer tutmayacak. Data boyutu açısından ise bilmem kaç byte yer kaplayan bir kaç fonksiyon. 

  const _subtraction = function () {
    debugger
    screen.value = screen.value - 1;
  }


  // Toplama işlemi
  const _addition = function () {
    screen.value = Number(screen.value) + 1;
  }


  // Reset işlemi
  const _reset = function () {
    screen.value = 0;
  }

  return {   // IIFe fonksyon içinde fonksiyonlarımı return ederek kullanabilirim aslında. Fakat topluca bir yerden yönetmek için bu dış fonksiyonda 1 adet obje dönüyorum. Window objesine benzer şekilde bir obje bu. Amacım ne init diye bir function elemanım vsr objemde o fonksiyonu da dışarda çağırarak tetiklemiş oluyorum. 

    init: function () {
      _eventListeners();
    },
  };
})();


counter.init(); // burada da enson iifeden döndürdüğüm objemin içindeki init fonkisoyununu çağırarak işlemimi yapıyorum. Kolay değil mi? :D 
