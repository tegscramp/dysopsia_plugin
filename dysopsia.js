 var dysopsia = document.getElementById('dysopsia_button');
 dysopsia.addEventListener('click', function () {
  let style_elem = document.createElement('style');
  style_elem.innerHTML = 'body.dysopsia{filter:grayscale(100%);background-color:#fff;}';
  document.querySelector('body').append(style_elem);
  document.querySelector('body').classList.toggle('dysopsia');
 }, false);
