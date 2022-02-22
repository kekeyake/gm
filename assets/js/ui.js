
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