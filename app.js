const form = document.querySelector(".form");
const card2 = document.querySelector(".card");
const inputs = document.querySelectorAll(".form__radio-group");

let  ratingValue;

inputs.forEach((input) => {
     input.addEventListener("change", (e) => {
        ratingValue = e.target.value;
     });
});



form.addEventListener("submit", function(e) {
    e.preventDefault();
    renderThankyou(card2, ratingValue)
});




function renderThankyou(container, ratingValue) {
    container.innerHTML = `
  <div class="card2">
    <div class="card-header2">
      <img src="./images/illustration-thank-you.svg" alt="">
    </div>
    <div class="header">
      <h2>You selected <span id="value">${ratingValue}</span> out of 5</h2>
    </div>
     <h1>Thank you</h1>
     <p>We appreciate you taking the time to give a rating. If you ever need
     more support, don't hesitate to get in touch!</p>
  </div>
`;
}