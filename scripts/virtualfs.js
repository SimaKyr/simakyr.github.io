String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.reverse = function(){
  let reversed = "";
  for (var i = this.length - 1; i >= 0; i--){
    reversed += this[i];
  }
  return reversed;
}

String.prototype.replaceLast = function (what, replacement) {
    return this.reverse().replace(new RegExp(what.reverse()), replacement.reverse()).reverse();
};

window.fs = {};

fs.onmount = function(){}

fs._name = 'simakyr';

fs.name = function(e){
  if(e){
    fs._name = String(e);
  }else{
    console.warn('What name of fs?');
  }
}

fs.wipe = function(){
  console.log('VirtualFS intializing...')
  fs._data = {};
}

fs.fix = function(e){
  if(e){
    try{
      fs._data = JSON.parse(e);
    }catch(e){
      console.warn('Error, you not fixed data!');
      console.warn(e);
    }
  }else{
    console.log('Use fs.fix(There fixed json)')
  }
}
fs.load = function(){
  if(!!localStorage[fs._name]){
    try{
      fs._data = JSON.parse(localStorage[fs._name]);
    }catch(e){
      console.warn('Corrupted data! Try to fix using fs.fix(There fixed json)');
      console.warn(e);
      console.log(localStorage[fs._name]);
    }
  }
}

fs.autoload = function(e){
  localStorage['_' + fs._name + '_autoLoad'] = !!e;
}

fs.wipe();

if(fs._name != 'virtualfs' && localStorage['_' + fs._name + '_autoLoad']){
  console.log('Found VFS/client, mounting...');
  fs.load();
  fs.onmount();
}

fs._convert = function(e){
  return '[\'' + e.replaceAll('/','\'][\'').slice('[\'') + '\']';
}

fs.size = function(e){
  if(fs.type(e) == 'folder'){
    return JSON.stringify(fs._read(e)).length / 1024;
  }else{
    return fs._read(e).length / 1024;
  }
}

fs.writeFile = function(e,c){
  if(e && c){
    fs._tmp = c;
    Function('fs._data' + fs._convert(e) + ' = fs._tmp;')();
    fs._tmp = '';
  }
}

fs.importFS = function(e) {
  if((typeof e).toLowerCase() == 'object'){
    fs._data = e;
  }
  fs.onmount();
}
fs.exportFS = function() {
  return fs._data;
}

fs._read = function(e){
  if(e){
    Function('fs._tmp = fs._data' + fs._convert(e))();
    return fs._tmp;
    fs._tmp = '';
  }else{
    return fs._data;
  }
}

fs.readFile = function(e){
  if(fs.type(e) == 'file'){
    return fs._read(e);
  }
}

fs.newFolder = function(e){
  fs.writeFile(e,{});
}

fs.rename = function(e, c){
  if(e && fs.check(e)){
    fs.writeFile(c, fs.readFile(e));
    fs.delete(e);
  }
}

fs.check = function(e){
  return !!fs._read(e);
}

fs.delete = function(e){
  if(e){
    Function('delete fs._data' + fs._convert(e))();
  }
}

fs.ls = function(e){
  if(fs.type(e) == 'folder'){
    return Object.keys(fs._read(e));
  }
}

fs.type = function(e){
  if(e){
    if((typeof fs._read(e)).toLowerCase() == 'object'){
      return 'folder';
    }else{
      return 'file';
    }
  }else{
    return 'folder';
  }
}

fs.readFileSync = function(e){
  return fs.readFile(e);
}

fs.existsSync = function(e) {
  return fs.check(e);
}

fs.readdir = function(e, f) {
  f(undefined,fs.ls(e));
}

fs.save = function(){
  localStorage[fs._name] = JSON.stringify(fs._data);
}

fs.findVFS = function () {
  if((typeof _vfs).toLowerCase() == 'object'){
    console.log('Found VFS/server, mounting...');
    fs.importFS(_vfs)
  }else{
    if((typeof _vfs).toLowerCase() == 'string'){
      if((typeof b64DecodeUnicode).toLowerCase() != 'undefined'){
        console.log('Found VFS/server, mounting...');
        fs.importFS(JSON.parse(b64DecodeUnicode(_vfs)))
      }
    }
  }
}

window.addEventListener("load", fs.findVFS, false);
