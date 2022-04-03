
function openSearchLayer() {
  
  let mSearchLayer = document.getElementById('searchWrapMobile');
  let tgBody = document.getElementById('body');
  mSearchLayer.classList.add('active');
  tgBody.classList.add('active');

}
function removeSearchLayer() {

  let mSearchLayer = document.getElementById('searchWrapMobile');
  let tgBody = document.getElementById('body');
  mSearchLayer.classList.remove('active');
  tgBody.classList.remove('active');

}
function openMobileMenu() {

  let mobileMenu = document.getElementById('mobileMenu');
  let tgBody = document.getElementById('body');
  mobileMenu.classList.add('active');
  tgBody.classList.add('active');

}

function closedMobileMenu() {

  let mobileMenu = document.getElementById('mobileMenu');
  let tgBody = document.getElementById('body');
  mobileMenu.classList.remove('active');
  tgBody.classList.remove('active');

}

function closePop(e) {

  $(e).closest('.overay_wrap').removeClass('on');
  $('html').css('height', 'auto');
  $('html').css('overflow-y', 'auto');

}

function popOpen(o){

  setTimeout(function(){
      $(o).addClass("on");
  },200);

  $('html').css('height','100vh');
  $('html').css('overflow-y','hidden');

}

// dimmed layer popup hide 
if (document.querySelectorAll('.overay_wrap').length > 0 ) {

  const $dimmed = document.querySelector('.overay_wrap');
  $dimmed.addEventListener('click', e => {
    e.target.classList.remove('on');
  });
}




// dark mode 
document.documentElement.setAttribute('color-theme', 'light'); // default light

if (document.querySelectorAll('.dark-mode-check').length > 0) {
  const $checkbox = document.querySelector('.dark-mode-check');

  $checkbox.addEventListener('click', e => {
    if (e.target.checked) {
      document.documentElement.setAttribute('color-theme', 'dark');
      e.target.closest('label').classList.add('dark-mode');
    } else {
      document.documentElement.setAttribute('color-theme', 'light');
      e.target.closest('label').classList.remove('dark-mode');
    }

  });
}

let $optionBox = document.querySelector('.option_box');
let $btnTab = document.querySelector('.btn_tab');
$btnTab.addEventListener('click', function() {
  $btnTab.classList.add('on');
  this.nextElementSibling.classList.remove('on');
  $optionBox.classList.remove('on');
});

let $btnTab2 = document.querySelector('.btn_tab2');
$btnTab2.addEventListener('click', function () {
  $btnTab2.classList.add('on');
  this.previousElementSibling.classList.remove('on');
  $optionBox.classList.add('on');
});
