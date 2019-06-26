var cycle = 600;
var wait = 2;
function like() {document.querySelector('.js-profile-header-vote-yes').click(); console.log('like ' + sss++);};
function stoplike() {clearInterval(timerId); console.log('stop');};
var sss = 1; wait = wait*1000; cycle = wait*cycle+1000;
var timerId = setInterval(like, wait);
setTimeout(stoplike, cycle);
