i = 60;
function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0) {
    alert('Times UP!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
}