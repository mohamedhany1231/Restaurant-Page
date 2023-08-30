import chefImg from "./images/chef-making-ok-sign-white-background.jpg";
import waiterImg from "./images/young-confident-smiling-man-waiter-uniform-tying-butterfly-neck-holding-tray-isolated-red-background.jpg";
import ceoImg from "./images/young-male-entrepreneur-making-eye-contact-against-blue-background.jpg";

let person = function (name, age, description, phone, job, imgUrl) {
  return { name, age, description, phone, job, imgUrl };
};
let staff = [];
staff[0] = person(
  "Akira Yamamoto",
  45,
  "Akira is a world-renowned chef who has cooked in some of the most prestigious restaurants in the world. He is known for his innovative and creative dishes, which are always made with fresh, seasonal ingredients.",
  " (123) 456-7890",
  "Chef",
  chefImg
);
staff[1] = person(
  "Michael Jones",
  28,
  "Michael is a friendly and outgoing waiter who is always happy to help his guests. He has a great knowledge of the menu, and he is always willing to make recommendations.",
  " (456) 789-0123",
  "Waiter",
  waiterImg
);
staff[2] = person(
  "William Smith",
  33,
  "William is a dynamic and experienced restaurant manager who has a passion for the food industry. He is known for his ability to create a positive and productive work environment, and he is always looking for ways to improve the guest experience.",
  "(789) 012-3456",
  "Restaurant Manger",
  ceoImg
);
export function renderAbout() {
  console.log(staff);
  let content = document.getElementById("content");
  content.innerHTML = "";
  let staffDiv = document.createElement("div");
  staffDiv.classList.add("staff");

  staff.forEach((human) => {
    let staffCard = document.createElement("div");
    staffCard.classList.add("staff-card");
    let text = document.createElement("div");
    text.classList.add("text");
    for (let key in human) {
      let p;
      if (key == "imgUrl") {
        p = new Image();
        p.src = human[key];
        staffCard.append(p);
      } else {
        if (key == "name") p = document.createElement("h2");
        else p = document.createElement("p");
        p.classList.add(key);
        p.innerText = human[key];
        text.append(p);
      }
    }
    staffCard.append(text);
    staffDiv.append(staffCard);
  });

  content.append(staffDiv);
}
