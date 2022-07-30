import Handlebars from "handlebars";

const cardsData = [
  {
    name: "Natasha",
    message: "Научи верстать"
  },
  {
    name: "Vika",
    message: "Как ты это сделал?"
  },
];

const template = Handlebars.compile(`
    <div class="cards">
        {{#each this}}
            <div class="card">
                <img src="https://otvet.imgsmail.ru/download/30760391_5a45473ac494df8439c1044d70743ce2_800.png" alt="">
                <div>
                    <p class="name">{{ name }}</p>
                    <p class="mini_message">{{ message }}</p>
                </div>
            </div>
        {{/each}}
    </div>`);

document.getElementById("cards").innerHTML = template(cardsData);
