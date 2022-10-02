const reviews = [
    {
id: 1,
name: "milli",
job:"content writter",
img:"./pic/p1.jpg",

text:"gggggsgggggdggdggdggg",},
{
    id: 2,
    name: "peter",
    job:"content writter",
    img:"./pic/p2.jpg",
    
    text:"gggggsgggggdggdggdggg",},
    {
        id: 3,
        name: "john",
        job:"content writter",
        img:"./pic/p3.jpg",
        
        text:"gggggsgggggdggdggdggg",},
            ]
            const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const review = document.querySelector(".review")
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});


function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
  
randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
   showPerson(currentItem);
    
  });