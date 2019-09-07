fs.newFolder('lang');

window.simakyr = {};

simakyr.summonMessageAboutData = function(){
  var a = document.createElement('div');
  var c = document.createElement('p');
  var p = document.createElement('button');

  p.onclick = function () {
    localStorage['simakyr-msgAboutData'] = true;
    document.body.removeChild(a);
  }

  a.className = 'msgAboutData';

  c.innerText = translation.msgAboutData;
  p.innerText = translation.msgAboutBtn;

  a.appendChild(c);
  a.appendChild(p);
  document.body.appendChild(a);
}

simakyr.card = {};
simakyr.cardpicker = {};

simakyr.card.selected = 0;

simakyr.pickcard = function(i){
  simakyr.card.pick(i);
  simakyr.cardpicker.pick(i);
}

simakyr.card.pick = function(i, a) {
  if(simakyr.card.selected != i || typeof a != 'undefined'){
    simakyr.card.selected = i;
    simakyr.card.unselectAll();
    simakyr.card.select(i);
  }
}

simakyr.card.select = function(i){
  var l = document.getElementsByClassName('card');
  l[i].classList.add('card-visible');
  setTimeout(function() {
    l[i].classList.remove('card-hidden');
  }, 300);
}

simakyr.card.unselectAll = function() {
  var l = document.getElementsByClassName('card');
  var i = 0;
  while(i != l.length) {
    l[i].classList.add('card-hidden');
    i++;
  }
}

simakyr.cardpicker.add = function(a) {
  var l = document.getElementById('selectcard');
  var i = document.createElement('a');
  i.classList.add('cardpicker');
  i.classList.add('cardpicker-notselected');
  i.onclick = function() {
    simakyr.pickcard(a);
  }
  l.appendChild(i);
}

simakyr.cardpicker.pick = function(i){
  simakyr.cardpicker.unselectAll();
  simakyr.cardpicker.select(i)
}

simakyr.cardpicker.unselectAll = function() {
  var l = document.getElementsByClassName('cardpicker');
  var i = 0;
  while( i!=l.length ) {
    l[i].classList.remove('cardpicker-selected');
    l[i].classList.add('cardpicker-notselected');
    i++;
  }
}

simakyr.cardpicker.select = function(i) {
  var l = document.getElementsByClassName('cardpicker');
  l[i].classList.add('cardpicker-selected');
  l[i].classList.remove('cardpicker-notselected');
}

simakyr.cardpicker.generate = function() {
  const l = document.getElementsByClassName('card').length;
  var i = 0;
  while (l!=i) {
    simakyr.cardpicker.add(i);
    i++;
  }
}

window.onload = function() {
    simakyr.card.pick(0,0);
    simakyr.cardpicker.generate();
    simakyr.cardpicker.select(0);
    if(localStorage['simakyr-msgAboutData'] != 'true'){
      simakyr.summonMessageAboutData();
    }
}
