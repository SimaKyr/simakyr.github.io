clipboard_dev = function(e){
  var p = document.createElement('textarea');

  p.style.padding = 0;
  p.style.border = 'none';
  p.style.outline = 'none';
  p.style.boxShadow = 'none';
  p.style.background = 'transparent';
  p.style.position = 'fixed';
  p.style.top = 0;
  p.style.left = 0;
  p.value = e;
  
  document.body.appendChild(p);

  p.focus();
  p.select();
  try {
    document.execCommand('copy');
  }catch{}
  document.body.removeChild(p);
}

window.clipboard = function(e){
  clipboard_dev(e);
}
