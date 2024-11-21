let sectionSkills = document.querySelector(".our-skills");
let proSpan = document.querySelectorAll(".our-skills .container .skills .prog-holder span");
let skillsPhoto = document.querySelector(".our-skills img");

let span = document.querySelectorAll(".stats .container .box .number");
let sectionStats = document.querySelector(".stats");
let started = false;

let show = document.querySelector("header .container .Up");

let Sectiongallery = document.querySelector(".gallery");
let photo = document.querySelector(".gallery .container");

let sectionWork = document.querySelector(".work");
let WorkPhoto = document.querySelector(".work .image");

window.onscroll = function () {
  if (window.scrollY >= sectionStats.offsetTop) {
    if (!started) {
      span.forEach((num) => starCount(num));
    }
    started = true;
  }else if (window.scrollY >= sectionSkills.offsetTop - 50) {
    proSpan.forEach((el) => {
      el.style.width = el.dataset.progress;
    })
    skillsPhoto.style.opacity = "1";
  }
  if (window.scrollY >= 1000) {
    show.classList.add("show");
  }else {
    show.classList.remove("show");
  }
  if(window.scrollY >= Sectiongallery.offsetTop) {
    photo.style.right = "0";
  }
  if(window.scrollY >= sectionWork.offsetTop) {
    photo.style.right = "0";
    WorkPhoto.style.opacity = "1";
  }
}
show.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function starCount (el) {
  let goal = el.dataset.goal; // خاصيه بتخلني اوصل لداته اتربيوت الي موجوده في السبان
  let count = setInterval (() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


function startCountdown() {
  let year = new Date().getFullYear();
  let initialTime = `Dec 31, ${year} 23:59:59`;
  let dataTime = new Date(initialTime).getTime();

  let counter = setInterval(() => {
    let time = new Date().getTime();
    let dateDiff = dataTime - time;

    if (dateDiff <= 0) {
      clearInterval(counter);
      year++;
      startCountdown(); // بدء المؤقت من جديد
      return;
    }

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let Hour = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secondes = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(
      ".events .container .info .time .unit:first-child span"
    ).innerHTML = days < 10 ? `00${days}` : days;
    document.querySelector(
      ".events .container .info .time .unit:nth-child(2) span"
    ).innerHTML = Hour < 10 ? `0${Hour}` : Hour;
    document.querySelector(
      ".events .container .info .time .unit:nth-child(3) span"
    ).innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(
      ".events .container .info .time .unit:nth-child(4) span"
    ).innerHTML = secondes < 10 ? `0${secondes}` : secondes;
  }, 1000);
}

// بدء العداد
startCountdown();