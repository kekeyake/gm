
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

// 0516 수정 
if (document.querySelectorAll('.btn_tab').length > 0) { 
  let $optionBox = document.querySelector('.option_box');
  let $btnTab = document.querySelector('.btn_tab');
  $btnTab.addEventListener('click', function() {
    $btnTab.classList.add('on');
    this.nextElementSibling.classList.remove('on');
    $optionBox.classList.remove('on');
  });
}
if (document.querySelectorAll('.btn_tab2').length > 0) { 
  let $btnTab2 = document.querySelector('.btn_tab2');
  $btnTab2.addEventListener('click', function () {
    $btnTab2.classList.add('on');
    this.previousElementSibling.classList.remove('on');
    $optionBox.classList.add('on');
  });
}


function selectLink(e) {
  e.classList.toggle('on');
}


let userSelects = document.querySelectorAll(".select_box a");
for (const userSelect of userSelects) {
  userSelect.addEventListener('click' ,function(){
    let tgParent = document.getElementById('userBtn');
    tgParent.classList.remove('on');
  });
}

let faqItems = document.querySelectorAll(".about-faq__q");
for (const faqItem of faqItems) {
  faqItem.addEventListener('click' ,function(){
    this.classList.toggle('on');
  });
}

let aboutItems = document.querySelectorAll(".about-rules__q");
for (const aboutItem of aboutItems) {
  aboutItem.addEventListener('click' ,function(){
    this.classList.toggle('on');
  });
}

function optionMenu() {
  var element = document.getElementById("optionSelect");
  element.classList.toggle("on");
}
function optionText(elf,elc) {
  let selectTime = document.getElementById('optionText');
  selectTime.firstChild.innerHTML = elf;
  selectTime.childNodes[1].innerHTML = elc;
}
let optBtns = document.querySelectorAll('.opt_btn > .select_box > button');

for (const optBtn of optBtns) {
  optBtn.addEventListener('click', function() {
    let emojiValue = this.childNodes[0].innerText;
    let textValue = this.childNodes[1].innerText;    
    this.classList.add('on');
    optionText(emojiValue,textValue);
    optionMenu();
  });
}