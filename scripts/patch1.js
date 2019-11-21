const url = 'https://simakyr.github.io/links';

var iconLinks = document.getElementsByClassName('icon-twitter')[0];
var linksbtn = document.getElementById('twitterbtn');

patch = function () {
  linksbtn.href = url;
  iconLinks.href = url;
  linksbtn.innerText = 'Линки';
  var g = document.createElement('style');
  g.innerText = ".icon-links{ background-image: url('links/img/favicon.png') !important;background-size: 20px !important;background-position: center !important; }";
  iconLinks.className = 'icon icon-links';
  document.body.appendChild(g);
}

patch();
