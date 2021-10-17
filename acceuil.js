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

btnPopup2.addEventListener('click',openModal);

btnClose2.addEventListener('click',closePopup);

function openModal() {
	overlay2.style.display='block';
}
function closePopup() {
	overlay2.style.display='none';
}
var btnPopup3 = document.getElementById('btnPopup3');
var overlay3 = document.getElementById('overlay3');
var btnClose3 = document.getElementById('btnClose3');

btnPopup3.addEventListener('click',openModal);

btnClose3.addEventListener('click',closePopup);

function openModal() {
	overlay3.style.display='block';
}
function closePopup() {
	overlay3.style.display='none';
}