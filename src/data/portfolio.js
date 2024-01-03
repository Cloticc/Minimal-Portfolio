/* The code is exporting an array of objects. Each object represents a project and contains properties
such as title, description, image URLs, stack (technologies used), and a link to the project's
GitHub repository or website. This code is likely used to showcase a list of projects on a website
or portfolio. */
export default [
  {
    title: "Custom Shop UI",
    description: " Creating a custom user interface using lua, featuring a simple yet powerful design with the ability to customize item and spell costs for an enhanced player vendor experiance.  ",
    imgBg: "",
    imgUrl: "./assets/racial-switch-ui.png",
    stack: [{ name: "Eluna/Lua", color: "#3767a9" }],
    link: "https://github.com/Cloticc/Eluna-scripts/tree/master/AIO%20Scripts/Custom%20store%20AIO",
  },

  {
    title: "Portfolio",
    description: "A dynamic portfolio website crafted using React and Vite, showcasing a range of skills and projects.",
    imgBg: "",
    imgUrl: "./assets/portfolio.png",
    stack: [{ name: "React", color: "#467ea2" }, { name: "Vite", color: "#983ced" }, { name: "HTML", color: "#e34c26" }, { name: "Tailwind", color: "#74bef5" },],

    link: "https://cloticc.github.io/Minimal-Portfolio/",
  },

  {
    title: "Custom Ability UI",
    description: "An intuitive user interface designed to enable the seamless switching of racial abilities across different races.",
    imgBg: "",
    imgUrl: "./assets/racialUI2.png",
    stack: [{ name: "Eluna/Lua", color: "#3767a9" }],
    link: "https://github.com/Cloticc/Eluna-scripts/tree/master/AIO%20Scripts/Custom%20Racial%20UI",
  },
  {
    title: "SQLoadout",
    description: "Menu that leverages a SQL database to automatically equip gear tailored to your current spec. With commands to change settings ingame.",
    imgBg: "",
    imgUrl: "./assets/gossip-sql-version.png",
    stack: [
      { name: "Eluna/Lua", color: "#3767a9" },
      { name: "SQL", color: "#f1e05a" },
    ],
    link: "https://github.com/Cloticc/Eluna-scripts/tree/master/Quality%20of%20life%20stuff/autoEquipGear",
  },
  {
    title: "Custom Zone-specific Enhancements",
    description: "System that check what zone you are in and automatically applies the appropriate buffs. With commands to change settings ingame CRUD. Get data from a SQL database.",
    imgBg: "",
    imgUrl: "",
    stack: [
      { name: "Eluna/Lua  ", color: "#3767a9" },
      { name: "SQL", color: "#f1e05a" },
    ],
    link: "https://github.com/Cloticc/Eluna-scripts/tree/master/Quality%20of%20life%20stuff/zone/sql%20version",
  },
  {
    title: "Weather-App",
    description: "Weather app to check the forcast of given location you input.",
    imgBg: "",
    imgUrl: "https://iili.io/J5W1czb.png",
    stack: [
      { name: "HTML  ", color: "#e34c26" },
      { name: "CSS", color: "#563d7c" },
      { name: "JS", color: "#f1e05a" },
    ],
    link: "https://github.com/Cloticc/Weather-app",
  },
];
