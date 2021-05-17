fs.onmount = function(){
  translation._translationReady = function() {
    title.innerText = translation.title;

    bartitle.innerText = translation.title;

    aboutbtn.innerText = translation.about;
    projetsbtn.innerText = translation.projects;
    //twitterbtn.innerHTML = translation.twitter;
    contactbtn.innerText = translation.contact;

    maintitle.innerText = translation.welcome;
    descmain.innerHTML = translation.info;

    titlesee.innerText = translation.projects_title;

    titleyt.innerText = translation.card_1;
    textyt.innerText = translation.card_1text;
    btnyt.innerText = translation.watch;

    titlesyp.innerText = translation.card2;
    textsyp.innerText = translation.card2_text;
    btnsyp.innerText = translation.seeongithub;

    textgameme.innerText = translation.card3_text;
    btngameme.innerText = translation.check;

    textlolpos.innerText = translation.card4_text;
    btnlolpos.innerText = translation.check;

    texttj.innerText = translation.card5_text;
    btntj.innerText = translation.convert;

    textpthj.innerText = translation['card6-text'];
    btnpthj.innerText = translation.translate;

    howtocontacttext.innerText = translation.howtocontact;

    credittext.innerText = translation.aboutsite;
  }
  translation._load(translation._lang());
  includeIdE = function(){
    var e = document.body.getElementsByTagName("*");
    var i = 0;
    for (var i = 0; i < e.length; i++) {
      if(e[i].id != ""){
        const t = e[i].id;
        window[t] = document.getElementById(t);
      }
    }
  }
  includeIdE();
}
