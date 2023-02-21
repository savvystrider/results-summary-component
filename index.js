const score = document.getElementById("score");
const icons = Array.from(document.querySelectorAll(".icon"));
const categories = Array.from(document.querySelectorAll(".category"));
const scores = Array.from(document.querySelectorAll(".score"));

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let sum = 0;
    data.forEach(item => {
        sum += item.score;
    });
    const averageScore = Math.ceil(sum / data.length);
    score.textContent = averageScore;
    
    data.forEach((item, index) => {
        icons[index].src = item.icon;
    });

    data.forEach((item, index) => {
        categories[index].textContent = item.category;
    })

    data.forEach((item, index) => {
        scores[index].innerHTML = `${item.score} <span class="slash">/ 100</span>`;
    })
  });
