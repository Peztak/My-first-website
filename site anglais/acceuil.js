var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click',openModal);

btnClose.addEventListener('click',closePopup);

function openModal() {
	overlay.style.display='block';
}
function closePopup() {
	overlay.style.display='none';
}
var btnPopup2 = document.getElementById('btnPopup2');
var overlay2 = document.getElementById('overlay2');
var btnClose2 = document.getElementById('btnClose2');

btnPopup2.addEventListener('click',openModal2);

btnClose2.addEventListener('click',closePopup2);

function openModal2() {
	overlay2.style.display='block';
}
function closePopup2() {
	overlay2.style.display='none';
}
var btnPopup3 = document.getElementById('btnPopup3');
var overlay3 = document.getElementById('overlay3');
var btnClose3 = document.getElementById('btnClose3');

btnPopup3.addEventListener('click',openModal3);

btnClose3.addEventListener('click',closePopup3);

function openModal3() {
	overlay3.style.display='block';
}
function closePopup3() {
	overlay3.style.display='none';
}