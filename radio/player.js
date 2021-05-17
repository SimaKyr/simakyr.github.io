var db = firebase.firestore();

function toHHMMSS(e) {
    var sec_num = parseInt(e, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    let out = '';
    if(hours != '00'){
      out += hours + ':';
    }
    out += minutes + ':' + seconds;
    return out;
}
function handleInfo() {
  db.collection("radio").doc("radio")
    .onSnapshot((doc) => {
        const data = JSON.parse(doc.data().info);
        if(data.title != 'undefined'){
          title.innerText = data.title;
          author.innerText = data.author;
          if(thumbnail.src != data.thumbnail){
            thumbnail.src = data.thumbnail;
          }
          webpagetitle.innerText = '📻Radio information v' +  data.version;
          time.innerText = '⌛' + toHHMMSS(data.time);
        }
    });
}
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
function init() {
  includeIdE();
  handleInfo()
}
init();
