const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',() =>{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',() =>{
	var scroll_position = window.scrollY;
	if(scroll_position > 250){
		header.style.backgroundColor = "#29323c";
	}
	else{
		header.style.backgroundColor = "trans";
	}
})


setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec; 
    let currentTime = hour + ":" + min + ":" + sec;
	document.getElementById("clock").innerHTML = currentTime;
}
showTime();
