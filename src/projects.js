let projects = [
  {
    name: "Kirby & The Tasty Minefields",
    description:
      "Help Kirby clear bombs so he can resume feasting! Extra cute Kirby themed Minesweeper game",
    photo: "/images/kirby_square.jpg",
    status: "100% MVP Completion, 30% Icebox Completion",
    link: "https://paulryeung.github.io/Kirby-Minesweeper/",
    github: "https://github.com/paulryeung/Kirby-Minesweeper",
    technology: "Vanilla Javascript, HTML, and CSS",
    howto:
      "Kirby Minesweeper! Win by revealing all safe squares, and planting minesweepers/Kirby on squares containing bombs. Left-click a square to reveal it. Numbers indicate how many of the 8 surrounding squares have a bomb. Revealing a bomb ends the game in defeat. Right clicking a square plants a minesweeper/Kirby. Number of bombs in current game and number of minesweepers/kirbys used is shown on the right. Game comes in Easy, Normal, and Hard settings as per button choices; changing board size and number of bombs.",
    authors: ["Paul Yeung (paulryeung)"],
  },
  {
    name: "Pullup",
    description:
      "Pullup onto a residential driveway you rented! Reserve parking spots from home owner listings! Introducing the AirBnB of parking!",
    photo: "/images/pullup.png",
    status: "85% MVP Completion, 10% Icebox Completion",
    link: "https://pullup-app.herokuapp.com/",
    github: "https://github.com/paulryeung/Pull-up",

    technology:
      "MERN stack (Mongo DB Atlas, Express.js, React, Node.js), Google Maps API, Google Autocomplete API, SASS styling, Heroku",
    howto:
      "Sign up and login to begin! Search the address or name of destination where you want to go. Interactive map will display any parking hostings near you. Click on the one you want, go to detail page, choose your dates and make your parking reservation! Also register your own homes as hostings, by searching your address and picking a daily rate to charge ($/day). Your home won't show up on your own search maps but appear in maps to other users! At the moment most users have registered homes in Toronto or Vancouver, but feel free to make multiple accounts and add listings everywhere in the world!",
    authors: [
      "Paul Yeung (paulryeung)",
      "Elvin Hatamov (elvinhatamov)",
      "Lud Lin (ludlin886)",
      "Shadab Karim (karims7)",
    ],
  },
  {
    name: "Avengers Initiative",
    description:
      "Tour the Avengers compound for top secret profiles and missions of your favorite heroes!",
    photo: "/images/avengers.jpg",
    status: "100% MVP Completion, 15% Icebox Completion",
    link: "https://avengers-initiative.herokuapp.com/",
    github: "https://github.com/paulryeung/avengers-initiative",
    technology: "Mongo DB Atlas, Express.js, Node.js, Heroku",
    howto:
      "Enter the site and browse! Click to see profiles of each Avenger, or existing missions from Avengers HQ. Feel free to recruit/add or delete an Avenger, filling out a form. Picture information is based on urls to online images. Also add or delete missions and click on icons to assign which avengers will participate. Clicking Reset DB Seeds will reset database to some default number of avenger profiles and missions.",
    authors: ["Paul Yeung (paulryeung)"],
  },
  {
    name: "Garden-Smart",
    description:
      "Add and show off your garden of vegetables! Waste money on different inputs!",
    photo: "/images/vegetables.jpg",
    status: "65% MVP Completion, 5% Icebox Completion",
    link: "https://garden-smart-app.herokuapp.com/",
    github: "https://github.com/paulryeung/Garden-Smart",
    technology: "Python, Django, PostgreSQL, AWS S3 Buckets, Heroku",
    howto:
      "Sign up and login to begin; or feel free to use Username: Paul and Password: password for demo! Go to the Garden and choose some seeds you wish to plant, and add some fertilizers, tools or pesticides you wish to use. They will be added to Your Basket. After that, go to Add A Vegetable and choose from the seeds in your basket to plant. Assign Date, and number of seeds which will affect your spending. Afterwards you can visit your garden, see your plant profile, add photo and consume inputs for a price. ",
    authors: [
      "Paul Yeung (paulryeung)",
      "Yaroslav Snigur (YaroslavSnigur)",
      "Joon Suh (Jason) Sohn (bbcello)",
    ],
  },
];

module.exports = projects;
