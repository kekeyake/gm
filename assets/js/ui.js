
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

//
function toggleSort() {
  var element = document.getElementById("timeSelect");
  element.classList.toggle("on");
}


function toggleMenu() {
  var element = document.getElementById("menuSelect");
  element.classList.toggle("on");
}

function modifyText(e) {
  let selectTime = document.getElementById('selectTime');
  selectTime.firstChild.nodeValue = e;
}
function modifyText2(e) {
  let selectTime = document.getElementById('menuText');
  selectTime.firstChild.nodeValue = e;
}

let selectBtns = document.querySelectorAll('.sort_btn > .select_box > button');

for (const selectBtn of selectBtns) {
  selectBtn.addEventListener('click', function() {
    let textValue = this.firstChild.nodeValue;
    this.classList.add('on');
    modifyText(textValue);
    toggleSort();
  });
}

let menuBtns = document.querySelectorAll('.m_btn > .select_box > button');

for (const menuBtn of menuBtns) {
  menuBtn.addEventListener('click', function() {
    let textValue = this.firstChild.nodeValue;
    this.classList.add('on');
    modifyText2(textValue);
    toggleMenu();
  });
}



// dark mode 
document.documentElement.setAttribute('color-theme', 'light'); // default light
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