let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 56 },
      { id: 2, message: "It's my first post", likesCount: 76 },
      { id: 3, message: "It's my second post", likesCount: 45 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Viktor", source: "https://pbs.twimg.com/profile_images/934040135267700736/SpDmNbOD_400x400.jpg" },
      { id: 2, name: "Vorobey", source: "https://i.mycdn.me/image?id=471646792802&plc=WEB&tkn=*WOitWNsFjRGzcPwFJaPx9dj4OBc&fn=sqr_288" },
      { id: 3, name: "Kit", source: "https://vignette.wikia.nocookie.net/catspedia/images/0/0d/Kot-semen-v-bronze.jpg/revision/latest/scale-to-width-down/340?cb=20131229110747&path-prefix=ru" },
      { id: 4, name: "Shumak", source: "https://i.mycdn.me/image?id=866136358563&plc=WEB&tkn=*2G7dxJs5T1qRHRMY56sh7Am55As&fn=sqr_288" },
      { id: 5, name: "Igoriok", source: "https://pbs.twimg.com/profile_images/465896391508627456/vPT1gDsd_400x400.jpeg" },
      { id: 6, name: "Yarik", source: "https://i.work.ua/sent_photo/d/3/0/d302648f7ffdc5a32408ec719faff71a.jpg" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Everything is cool!" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, fullName: "Viktor", image: "https://pbs.twimg.com/profile_images/934040135267700736/SpDmNbOD_400x400.jpg" },
      { id: 2, fullName: "Vorobey", image: "https://i.mycdn.me/image?id=471646792802&plc=WEB&tkn=*WOitWNsFjRGzcPwFJaPx9dj4OBc&fn=sqr_288" },
      { id: 3, fullName: "Kit", image: "https://vignette.wikia.nocookie.net/catspedia/images/0/0d/Kot-semen-v-bronze.jpg/revision/latest/scale-to-width-down/340?cb=20131229110747&path-prefix=ru" },
      { id: 4, fullName: "Shumak", image: "https://i.mycdn.me/image?id=866136358563&plc=WEB&tkn=*2G7dxJs5T1qRHRMY56sh7Am55As&fn=sqr_288" },
      { id: 5, fullName: "Igoriok", image: "https://pbs.twimg.com/profile_images/465896391508627456/vPT1gDsd_400x400.jpeg" },
      { id: 6, fullName: "Yarik", image: "https://i.work.ua/sent_photo/d/3/0/d302648f7ffdc5a32408ec719faff71a.jpg" },
    ],
  },
};

export default state;
