const recipeBox = document.querySelector(".recipe-box");

const appleCrisp = {
    imageSrc: "images/apple-crisp.jpg",
    imgAlt: "delicious apple crisp",
    category: "dessert",
    name: "Apple Crisp",
    desc: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
};

recipeBox.innerHTML = `
<section class="recipe">
<img src=${appleCrisp.imageSrc} alt=${appleCrisp.imgAlt}>
<section class="info">
    <p id="category">${appleCrisp.category}</p>
    <h1>${appleCrisp.name}</h1>
    <span
    class="rating"
    role="img"
    aria-label="Rating: 4 out of 5 stars"
    >
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
    </span>
    <p id="description">${appleCrisp.desc}</p>
</section>
</section>
`;
