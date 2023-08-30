import mSticksImg from "./images/fried-chicken-sticks-wooden-board-with-mayonnaise-tomato-sauce.jpg";
import HummusImg from "./images/freshmade-oriental-classic-hummus-served-bowl-table.jpg";
import guacamoleImg from "./images/guacamole-dip.jpg";
import friedImg from "./images/fried-chicken-french-fries-black-cement-floor.jpg";
import spicyFriedImg from "./images/crispy-fried-chicken-plate-with-salad-carrot.jpg";
import countryFriedImg from "./images/Country Fried Chicken.jpeg";
import honeyButterFriedImg from "./images/honey-butter-fried-chicken.jpeg";
import sweetPotatoPieImg from "./images/Sweet Potato Pie.jpeg";
import peachCobblerImg from "./images/Peach Cobbler.jpeg";
import mashedPotatoImg from "./images/mashed -potato.jpeg";
import macCheeseImg from "./images/close-up-melted-mac-cheese.jpg";
class Dish {
  constructor(title, description, imageUrl) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
let appetizers = [];
appetizers[0] = new Dish(
  "Mozzarella Sticks",
  "These crispy sticks of mozzarella cheese are coated in breadcrumbs and fried to perfection. They are often served with marinara sauce for dipping.",
  mSticksImg
);
appetizers[1] = new Dish(
  "Hummus",
  "This smooth and creamy dip is made from mashed chickpeas, tahini, lemon juice, and garlic. It is often served with pita bread or vegetables for dipping.",

  HummusImg
);
appetizers[2] = new Dish(
  "Guacamole",
  "This creamy and flavorful dip is made from mashed avocados, tomatoes, onions, cilantro, and lime juice. It is often served with chips or vegetables for dipping.",

  guacamoleImg
);
let mainDishes = [];
mainDishes[0] = new Dish(
  "Fried Chicken ",
  " This classic dish is made with boneless, skinless chicken breast that is coated in a crispy batter and fried to perfection. It is often served with your choice of two sides, such as mashed potatoes and gravy, macaroni and cheese, or collard greens.",

  friedImg
);
mainDishes[1] = new Dish(
  "Spicy Fried Chicken ",
  " This dish is made with the same classic fried chicken recipe, but with an added kick of heat from cayenne pepper or other spices. It is often served with your choice of two sides, such as ranch dressing or honey mustard sauce.",

  spicyFriedImg
);
mainDishes[2] = new Dish(
  "Honey Butter Fried Chicken ",
  "This dish is made with a sweet and sticky glaze that is made with honey, butter, and spices. It is often served with your choice of two sides, such as waffles or biscuits.",

  honeyButterFriedImg
);
mainDishes[3] = new Dish(
  "Country Fried Chicken ",
  "This dish is made with a thick, crunchy batter that is made with cornmeal and flour. It is often served with your choice of two sides, such as mashed potatoes and gravy, or green beans.",

  countryFriedImg
);
let sides = [];
sides[0] = new Dish(
  "Mashed Potatoes and Gravy",
  "This classic side dish is made with mashed potatoes that are creamy and smooth, and topped with a rich and flavorful gravy.",

  mashedPotatoImg
);
sides[1] = new Dish(
  "Macaroni and Cheese",
  " This cheesy side dish is made with macaroni noodles that are cooked to perfection and smothered in a creamy cheese sauce.",

  macCheeseImg
);
let desserts = [];
desserts[0] = new Dish(
  "Sweet Potato Pie",
  " This Southern classic is made with mashed sweet potatoes, spices, and a flaky crust. It is often topped with whipped cream or ice cream.",
  sweetPotatoPieImg
);
desserts[1] = new Dish(
  "Peach Cobbler",
  " This cobbler is made with fresh peaches, sugar, and a biscuit topping. It is often served with vanilla ice cream.",
  peachCobblerImg
);
let menu = [
  { title: "appetizers", list: appetizers },
  { title: "main dishes", list: mainDishes },
  { title: "side dishes", list: sides },
  { title: "deserts", list: desserts },
];
export function renderMenu() {
  console.log("menu");
  let content = document.getElementById("content");
  content.innerHTML = "";
  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  menu.forEach((section) => {
    let sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");
    let sectionHeader = document.createElement("h2");
    sectionHeader.innerText = section.title;
    sectionHeader.classList.add("section-header");
    sectionDiv.append(sectionHeader);

    section.list.forEach((dish) => {
      let dishDiv = document.createElement("div");
      dishDiv.classList.add("dish");
      let dishText = document.createElement("div");
      dishText.classList.add("text");
      let dishTitle = document.createElement("h3");
      dishTitle.classList.add("dish-title");
      dishTitle.innerText = dish.title;
      dishText.append(dishTitle);

      let dishDescription = document.createElement("p");
      dishDescription.classList.add("dish-description");
      dishDescription.innerText = dish.description;
      dishText.append(dishDescription);
      dishDiv.append(dishText);
      let dishImg = new Image();
      dishImg.classList.add("dish-img");
      dishImg.src = dish.imageUrl;
      dishDiv.append(dishImg);

      sectionDiv.append(dishDiv);
    });
    menuDiv.append(sectionDiv);
  });
  content.append(menuDiv);
}
