console.clear()


//Bookmark Toggle for each
function bookmarkBtn () {
    const bookmarks = document.querySelectorAll('[data-js="bookmark-btn"]');
    bookmarks.forEach((bookmark) => {
        bookmark.addEventListener("click", () => {
            bookmark.classList.toggle("active");
        });
    });
}

bookmarkBtn();


// show/hide answer and button content
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");


  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});