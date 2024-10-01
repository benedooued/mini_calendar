const date = document.getElementById("date"); /*Récupérer une balise par son id*/
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
const allMonths = ["January", "February","March","April","May","June","July",
    "August", "September","October", "November", "December"
];

const today = new Date();
date.innerHTML = (today.getDate() < 10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML =allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();