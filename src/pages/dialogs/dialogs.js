import Handlebars from "handlebars";

const cardsData = [
  {
    img: "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
    name: "Natasha",
    message: "Научи верстать"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZSMuyms_Fot3FgBtYYErTU2rMWmYwqi27cPw2Sno4ZkLKOVH6kLRCOmgKnP5-lHSuv0&usqp=CAU",
    name: "Vika",
    message: "Как ты это сделал?"
  },
  {
    img: "https://i.pinimg.com/736x/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg",
    name: "Vanya",
    message: "Я тут сижу давно"
  },
  {
    img: "https://img2.akspic.ru/crops/2/1/0/8/5/158012/158012-volk-belyj_medved-lazurnyj-sinij-bakenbardy-1080x1920.jpg",
    name: "Patrik",
    message: "Ем вкусный торт"
  },
  {
    img: "https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D0%B8%D0%BB%D1%8B%D0%B5-%D0%BD%D0%B5-%D1%80%D0%B0%D1%81%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-029.jpg",
    name: "Liza",
    message: "Пойдешь гулять?"
  },
  {
    img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
    name: "Alex",
    message: "damn bro"
  },
  {
    img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
    name: "Alex",
    message: "damn bro"
  },
  {
    img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
    name: "Alex",
    message: "damn bro"
  },
  {
    img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
    name: "Alex",
    message: "damn bro"
  },
];

const template = Handlebars.compile(`
    <div class="cards">
        {{#each this}}
            <div class="card">
                <img src="{{ img }}" alt="">
                <div>
                    <p class="name">{{ name }}</p>
                    <p class="mini_message">{{ message }}</p>
                </div>
            </div>
        {{/each}}
    </div>`);

document.getElementById("cards").innerHTML = template(cardsData);
