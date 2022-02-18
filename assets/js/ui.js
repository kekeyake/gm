
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