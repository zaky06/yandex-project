import Handlebars from "handlebars";

const messageData = [
    {
      img: "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
      message: "Салют родной, не видела тебя давно",
      time: "17:10",
      id: "Natasha"
    },
    {
      img: "https://cdn1.ozone.ru/s3/multimedia-0/6031186656.jpg",
      message: "Привет, я был сильно занят",
      time: "17:12",
      id: "Max"
    },
    {
      img: "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
      message: "Ясно, давай встретимся?",
      time: "17:15",
      id: "Natasha"
    },
    {
      img: "https://cdn1.ozone.ru/s3/multimedia-0/6031186656.jpg",
      message: "Не  могу, я носки стираю",
      time: "17:17",
      id: "Max"
    },
    {
      img: "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
      message: "Блииин как жаль",
      time: "17:16",
      id: "Natasha"
    }
  ];

  // const isMax = (id) => id === "Max"
  Handlebars.registerHelper('isMax', function (id) {
    return id === "Max";
  });

  const template = Handlebars.compile(`
      <div class="container">
          {{#each this}}
              <div class="mess {{#if (isMax id)}}right{{else}}left{{/if}}">
                  <img src="{{ img }}" alt="">
                  <p class="dialog_mess">{{ message }}</p>
                  <span class="time">{{ time }}</span>
              </div>
          {{/each}}
      </div>`);
  
      document.getElementById("container").innerHTML = template(messageData);