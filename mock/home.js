let imageUrl = 'https://144.34.173.46/images'
export default {
  user: {
    userEname: "Pengyu Li",
    userName: "黎鹏宇",
    photo:`${imageUrl}/photo.jpg`,
    school1:`${imageUrl}/school1.gif`,
    school2:`${imageUrl}/school2.png`,
  },
  intro: [
    {
      className: "intro_name",
      text: "Pengyu Li",
    },
    {
      className: "intro_text",
      text: " is a M.S. student in Computer Science at the ",
    },
    {
      className: "intro_name",
      text: "University of Chicago",
    },
    {
      className: "intro_text",
      text: ", USA. Working in ",
    },
    {
      className: "intro_link_orange",
      text: "Human Computer Integration Lab",
      link: "http://lab.plopes.org/",
    },
    {
      className: "intro_text",
      text: " led by Prof. ",
    },
    {
      className: "intro_link_green",
      text: "Pedro Lopes",
      link: "http://plopes.org/",
    },
    {
      className: "intro_text",
      text: ", he believes that seamless integration of haptic sensation and digital information will bring us total harmony between humans and technologies. ",
    },
    {
      className: "intro_text display_block",
      text: "He developed miniaturized, soft, and large shape-changing interactive devices that bridge haptics across virtual and physical realities.",
    },
  ],
  contact: [
    {
      className: "profession",
      text: "HCI Researcher Interaction Designer ",
    },
    {
      className: "line",
      text: "",
    },
    {
      className: "contact_info",
      label: "pengyulee@uchicago.edu",
      link: "mailto:pengyulee@uchicago.edu",
      target: "_self",
    },
    {
      className: "contact_info",
      label: "Twitter",
      link: "https://twitter.com/PengyuLi6",
    },
    {
      className: "contact_info",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/pengyu-li-b3ba541a4/",
    },
    {
      className: "tag tag_right",
      text: "CV",
      link: `${imageUrl}cv_pengyuli_2021.pdf`,
    },
    //{
      //className: "tag",
      //text: "VIDEO",
      //link: "http://www.pengpengzhuangxiu.com",
    //},
  ],
  research: [
    {
      className: "item_title",
      text: "Research",
    },
    {
      className: "",
      text: "",
    },
    {
      className: "title_list",
      text: "",
      items: [
        {
          className: "line_two",
          text: "",
        },
        {
          className: "item_title_info",
          text: "He",
        },
        {
          className: "item_title_info",
          text: "concentrates on",
        },
        {
          className: "item_title_info",
          text: "HCI and",
        },
        {
          className: "item_title_info",
          text: "Robotics",
        },
      ],
    },
  ],
  researchList: [
    {
      className: "",
      title: "Touch & fold",
      img: "https://tengshanyuan.com/projects/touchfold/touchfold.gif",
      detail:
        "A foldable haptic actuator for rendering touch in mixed reality.",
      year: "CHI 2021 Paper",
      redText: "Best Paper Honorable Mention Award",
      tags: [
        { text: "PDF", link: `${imageUrl}chi21_touchfold.pdf` },
        { text: "VIDEO", link: "https://www.youtube.com/watch?v=yg8BOKhs4XM&t=2s" },
        { text: "WEB", link: "http://www.pengpengzhuangxiu.com" },
      ],
    },
    {
      className: "",
      title: "DextrEMS",
      img: `${imageUrl}/dextrems.png`,
      detail:
        "Increasing Dexterity in Electrical Muscle Stimulation by Combining it with Brakes",
      year: "UIST 2021 Paper",
      //redText: "Best Paper Honorable Mention Award",
      tags: [
        //{ text: "PDF", link: `${imageUrl}chi21_touchfold.pdf` },
        { text: "VIDEO", link: "https://www.youtube.com/watch?v=wOOlHZ8hBnA" },
        { text: "WEB", link: "http://www.pengpengzhuangxiu.com" },
      ],
    },
    //{
      //className: "",
      //title: "Shape Display",
      //img: `${imageUrl}shapedisplay.png`,
      //detail:
        //"A shape morphing balloon to display divers shape to provides tactile feedback in mixed reality (MR) environments.",
      //year: "to ",
      //redText: "Best Paper Honorable Mention Award",
      //tags: [
        //{ text: "PDF", link: `${imageUrl}shape_display.pdf` },
        //{ text: "VIDEO", link: "http://www.pengpengzhuangxiu.com" },
        //{ text: "WEB", link: "http://www.pengpengzhuangxiu.com" },
      //],
    //},
    {
      className: "",
      title: "Cube Robot",
      img: `${imageUrl}rcm.gif`,
      detail:
        "A kind of five-fingered magic cube which can takes 25 seconds to solve the magic cube.",
      year: "NAIRC 2018",
      redText: "Honorable Prize in NAIRC ‘18",
      tags: [
        { text: "PDF", link: `${imageUrl}cube.pdf` },
        { text: "VIDEO", link: "https://www.youtube.com/watch?v=hmcwHhLT6ww" },
        //{ text: "WEB", link: "http://www.pengpengzhuangxiu.com" },
      ],
    },
    {
      className: "",
      title: "AI Robot",
      img: `${imageUrl}icra.gif`,
      detail:
        "Perceive, Decided, and control two robots to shoot each other in coordination to get points.",
      year: "ICRA ‘18 Robomaster",
      redText: "B Level Prize in ICRA ‘18",
      tags: [
        { text: "PDF", link: `${imageUrl}icra_tju_techreport_final.pdf`},
        { text: "VIDEO", link: "https://youtu.be/QfoKUOvJ754" },
        { text: "WEB", link: "http://www.pengpengzhuangxiu.com" },
      ],
    },
    {
      className: "",
      title: "Robomaster",
      img: `${imageUrl}rbst.gif`,
      detail:
        "In a large-scale robot cooperative attack competition, participants use the first-person perspective to control the robots for competition.",
      year: "RMIC 2018",
      //redText: "Best Paper Honorable Mention Award",
      tags: [
        { text: "PDF", link: "http://www.pengpengzhuangxiu.com" },
        { text: "VIDEO", link: "http://www.pengpengzhuangxiu.com" },
        { text: "WEB", link: "http://www.pengpengzhuangxiu.com" },
      ],
    },
  ],
  work: [
    {
      className: "item_title",
      text: "Work & Intern",
    },
    {
      className: "",
      text: "",
    },
    {
      className: "title_list",
      text: "",
      items: [
        {
          className: "line_two",
          text: "",
        },
        {
          className: "item_title_info",
          text: "He have lot of",
        },
        {
          className: "item_title_info",
          text: "experience on",
        },
        {
          className: "item_title_info",
          text: "Product Design",
        },
        {
          className: "item_title_info",
          text: "and UX Field",
        },
      ],
    },
  ],

  workList: [
    {
      className: "",
      title: "Robomaster S1",
      img: `${imageUrl}s1.png`,
      detail:
        "Serve as a UX designer for the shooting module of the Robomaster S1, an educational robot product that aims at the STEM Edu field.",
      year: "DJI Technology Co. Ltd.",
      redText: "Award of the Top 10 Intern",
      tags: [
        //{ text: "PDF", link: "http://www.pengpengzhuangxiu.com" },
        { text: "PRODUCT PAGE", link: "https://www.dji.com/robomaster-s1" },
      ],
    },
    {
      className: "",
      title: "Pat Pet",
      img: "http://www.xbotpark.com/public/static/home/images/page-news/banner.png",
      detail:
        "Proposed the pain point of stains brought by the soles of pets after walking the dog home will pollute the room. And finished the structural design of the Product.",
      year: "XbotPark | Co-founder",
      redText: "2.5 M Angel Round Financing",
      tags: [
        //{ text: "PDF", link: "http://www.pengpengzhuangxiu.com" },
        //{ text: "PRODUCT", link: "http://www.pengpengzhuangxiu.com" },
      ],
    },
    {
      className: "",
      title: "Weipeiyang BBS",
      img: `${imageUrl}twt.png`,
      detail:
        "Served as a project manager of TWT Studio, Put forward the product scheme and system design of Community Recruitment System.",
      year: "TWT Studio | Campus lT services @TJU",
      //redText: "Award of the Top 10 Intern",
      tags: [
        { text: "APP", link: "https://mobile.twt.edu.cn/" },
        { text: "BBS", link: "https://mobile.twt.edu.cn/wpy/index.html" },
      ],
    },
  ],
};
