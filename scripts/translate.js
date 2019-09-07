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

    vk.innerText = translation.vk;

    credittext.innerText = translation.aboutsite;

    beta.innerText = translation.beta;
  }
  translation._load(translation._lang());
  var i = 0;
  var g = document.body.getElementsByTagName("*");
  while(g.length!=i){
    if((typeof g[i].id).toLowerCase() != 'undefined' && g[i].id){
        var t = g[i].id + '=document.body.getElementsByTagName("*")[' + i + ']';
        // console.log(g[i].id);
        // console.log(g[i]);
        Function(t)();
    }
    i++;
  }
}
