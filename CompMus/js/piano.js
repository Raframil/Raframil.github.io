var keyAllowed = {};

$(document).on('keydown', function(e) {
  if (keyAllowed[e.which] === false) return;
  keyAllowed[e.which] = false;
  if (e.which == 65) {  //a
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).addClass("active");
    C4();
  }else
  if (e.which == 83) {  //s
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).addClass("active");
    D4();
  }else
  if (e.which == 68) { //d
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).addClass("active");
    E4();
  }else
  if (e.which == 70) { //f
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).addClass("active");
    F4();
  }else
  if (e.which == 71) { //g
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).addClass("active");
    G4();
  }else
  if (e.which == 72) { //h
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).addClass("active");
    A4();
  }else
  if (e.which == 74) { //j
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).addClass("active");
    B4();
  }

}).keyup(function(e) {
  if (e.which == 65) {
    keyAllowed[e.which] = true;
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).removeClass("active");
  }else
  if (e.which == 83){
    keyAllowed[e.which] = true;
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).removeClass("active");
  }else
  if (e.which == 68){
    keyAllowed[e.which] = true;
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).removeClass("active");
  }else
  if (e.which == 70){
    keyAllowed[e.which] = true;
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).removeClass("active");
  }else
  if (e.which == 71){
    keyAllowed[e.which] = true;
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).removeClass("active");
  }else
  if (e.which == 72){
    keyAllowed[e.which] = true;
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).removeClass("active");
  }else
  if (e.which == 74){
    keyAllowed[e.which] = true;
    var k = String.fromCharCode(e.which).toLowerCase();
    $("#" + k).removeClass("active");
  }
});
$(".box").bind('mousedown', function(e) {
  $(this).addClass("active");
  $(this).addClass("click");
  var k = $(this).prop('id');
  document.getElementById(k+'Audio').play();
  document.getElementById(k+'Audio').currentTime = 0;
  document.getElementById(k+'Audio').volume = 0.1;
});
$(".box").bind('mouseleave mouseup', function() {
  if ($(this).hasClass("click")) {
  	$(this).removeClass("active");
    $(this).removeClass("click");
  }
});

/*var aNote= document.getElementById('aAudio'),
    bNote= document.getElementById('bAudio'),
    cNote= document.getElementById('cAudio'),
    dNote= document.getElementById('dAudio'),
    eNote= document.getElementById('eAudio'),
    fNote= document.getElementById('fAudio'),
    gNote= document.getElementById('gAudio');

$('#a').mousedown(function(){
    aNote.play();
    aNote.currentTime = 0;
  	aNote.volume=0.1;
  
});

$('#b').mousedown(function(){
    bNote.play();
    bNote.currentTime = 0;
  	bNote.volume=0.1;
});

$('#c').mousedown(function(){
    cNote.play();
    cNote.currentTime = 0;
  	cNote.volume=0.1;
});

$('#d').mousedown(function(){
    dNote.play();
    dNote.currentTime = 0;
  	dNote.volume=0.1;
});

$('#e').mousedown(function(){
    eNote.play();
    eNote.currentTime = 0;
  	eNote.volume=0.1;
});

$('#f').mousedown(function(){
    fNote.play();
    fNote.currentTime = 0;
  	fNote.volume=0.1;
});

$('#g').mousedown(function(){
    gNote.play();
    gNote.currentTime = 0;
  	gNote.volume=0.1;
});

$('#g').keydown(function(){
    gNote.play();
    gNote.currentTime = 0;
  	gNote.volume=0.1;
});*/