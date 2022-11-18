let month = document.querySelector(".month");
let day = document.querySelector(".day");
let year = document.querySelector(".year");
let date = new Date();
let months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
 ];
 month.innerHTML = months[date.getMonth()];
 day.innerHTML = date.getDate();
 year.innerHTML = date.getFullYear();