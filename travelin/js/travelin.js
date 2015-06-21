$(function() {
 
 
// トップ画のアニメーションスピードをコントロール
 
var fadeinSP = 600; //フェードインスピード
var fadeoutSP = 600; //フェードアウトスピード
 
 
// トップ画の通常非表示設定
 
$('#mainview2').hide();
$('#mainview3').hide();
$('#mainview4').hide();
$('#charmexplain').hide();
$('#usaexplain').hide();
$('#londonexplain').hide();

 
// 「旅行」hover時にトップ画フェードイン
 
$('#sidenav1').hover(
function () {
$('#mainview2').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#mainview2').stop(true, true).fadeOut(fadeoutSP);
}
);
 
 
// 「一人旅」hover時にトップ画フェードイン
 
$('#sidenav2').hover(
function () {
$('#mainview3').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#mainview3').stop(true, true).fadeOut(fadeoutSP);
}
);
 
 
// 「バックパック」hover時にトップ画フェードイン
 
$('#sidenav3').hover(
function () {
$('#mainview4').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#mainview4').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「charm画」hover時に説明フェードイン
 
$('#charm').hover(
function () {
$('#charmexplain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#charmexplain').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「usa画」hover時に説明フェードイン
 
$('#usa').hover(
function () {
$('#usaexplain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#usaexplain').stop(true, true).fadeOut(fadeoutSP);
}
);


// 「london画」hover時に説明フェードイン
 
$('#london').hover(
function () {
$('#londonexplain').stop(true, true).fadeIn(fadeinSP);
}, function () {
$('#londonexplain').stop(true, true).fadeOut(fadeoutSP);
}
);




});
