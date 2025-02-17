const Categories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => console.log(data.categories))
    .catch((err) => console.log(err));
};

const displayCategory = (data) => {};

Categories();
