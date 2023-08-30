import homeImg from "./images/crispy-fried-chicken-plate-with-salad-carrot.jpg";
export function renderHome() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerHTML = "Best Fried Chicken <br />You Will Ever Eat!";
  content.append(h1);

  let img = new Image();
  img.src = homeImg;
  img.classList.add("home-img");
  img.alt = "fried chicken";
  content.append(img);

  let description = document.createElement("p");
  description.classList.add("home-description");
  description.innerHTML =
    "<span>Crispy, juicy, and finger-lickin' good fried chicken!</span> Our chicken is made with fresh, never frozen chicken and cooked to perfection in our signature batter. We offer a variety of flavors to choose from, so you're sure to find something you love.";
  content.append(description);
}
