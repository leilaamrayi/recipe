
function adjustIngredients(servings) {
  // Get the original ingredient quantities
  const pastaQty = 1;
  const tomatoQty = 4;
  const garlicQty = 4;
  const oilQty = 0.25;
  const basilQty = 0.25;
  
  // Calculate the adjusted ingredient quantities
  const pastaAdj = pastaQty * servings / 4;
  const tomatoAdj = tomatoQty * servings / 4;
  const garlicAdj = garlicQty * servings / 4;
  const oilAdj = oilQty * servings / 4;
  const basilAdj = basilQty * servings / 4;
  
  // Update the ingredient list with the new quantities
  document.getElementById("pasta").textContent = pastaAdj + " pounds penne pasta";
  document.getElementById("tomatoes").textContent = tomatoAdj + " ripe tomatoes, diced";
  document.getElementById("garlic").textContent = garlicAdj + " cloves garlic, minced";
  document.getElementById("oil").textContent = oilAdj + " cups olive oil";
  document.getElementById("basil").textContent = basilAdj + " cups fresh basil, chopped";
}

//Add Event Listener to Serving Size Input Field
document.getElementById("servings").addEventListener("input", function() {
  const servings = document.getElementById("servings").value;
  adjustIngredients(servings);
});


// JavaScript to handle the review form submission and adding the review to the reviews section
const form = document.querySelector('#review-form');
const reviewsList = document.querySelector('#reviews ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const rating = formData.get('rating');
  const review = formData.get('review');

  // Create a new review element and add it to the reviews list
  const newReview = document.createElement('li');
  newReview.innerHTML = `
    <strong>${name}:</strong>
    <span class="rating">${rating} Stars</span>
    <p class="review">${review}</p>
  `;
  reviewsList.appendChild(newReview);

  // Clear the form
  event.target.reset();
});

