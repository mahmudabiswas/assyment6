// all categories
const categories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))
    .catch((err) => console.log(err));
};

// allPetCategories

const loadAllPetCategories = (pet) => {
  console.log(pet);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${pet}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

// allPets
const petsCard = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => petsData(data.pets))
    .catch((err) => console.log(err));
};

// categories button
const displayCategory = (data) => {
  // console.log(data);
  const categoriConatiner = document.getElementById("categori");
  data.forEach((item) => {
    // console.log(item);
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = ` <button onClick="loadAllPetCategories(${item.id})" class="btn">
    <img src=${item.category_icon}/> ${item.category}
    </button>`;

    categoriConatiner.appendChild(buttonContainer);
  });
};

// all pets data

const petsData = (pet) => {
  const AllPtes = document.getElementById("pets");
  // AllPtes.innerHTML = "";
  pet.forEach((item) => {
    // console.log(item);
    const button = document.createElement("button");
    button.classList = "card bg-base-100 w-96 shadow-xl";
    button.innerHTML = `  <figure>
    <img
      src=${item.image}
      alt="Pets" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${item.category}
    </h2>
    <h2 class="card-title">
      <i class="fa-solid fa-bread-slice"></i>
      <div class="badge text-xl">${item.breed}</div>
    </h2>
    <h2 class="card-title">
     <i class="fa-solid fa-cake-candles"></i>
      <div class="badge text-xl">${item.date_of_birth}</div>
    </h2>
    <h2 class="card-title">
    <i class="fa-solid fa-venus"></i>
      <div class="badge text-xl">${item.gender}</div>
    </h2>
    <h2 class="card-title">
    <i class="fa-solid fa-tags"></i>
      <div class="badge text-xl">${item.price}</div>
    </h2>

    <div class="card-actions flex item-center ">

      
     <button class="btn"><i class="fa-solid fa-thumbs-up"></i></button>
     <button class="btn">Adopt</button>
     <button class="btn">Details</button>
    </div>
  </div>`;
    AllPtes.appendChild(button);
  });
};

categories();
petsCard();
