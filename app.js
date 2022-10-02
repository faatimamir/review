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
    img:"./pic/p1.jpg",
    
    text:"gggggsgggggdggdggdggg",},
    {
        id: 3,
        name: "john",
        job:"content writter",
        img:"./pic/p1.jpg",
        
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
  
randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
   //showPerson(currentItem);
   review.innerHTML = currentItem
  });