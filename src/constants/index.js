import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    TomahoSoftware,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    angularjs,
    firebase,
    crwnShop,
    clips,
    blurimg,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "AngularJS Developer",
      icon: backend,
    },
    {
      title: "TypeScript Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Angular Js",
      icon: angularjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Tomaho Software",
      icon: TomahoSoftware,
      iconBg: "#383E56",
      date: "September 2022 - November 2022",
      points: [
        "Developing and maintaining Accounting applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: TomahoSoftware,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The biggest risk is not taking any risk in a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
      name: "Mark Zuckerberg",
      designation: "CEO",
      company: "Facebook",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
        name: "Mark Zuckerberg",
        designation: "CEO",
        company: "Facebook",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Ideas don’t come out fully formed , they only become clearer as you work on them . You just have to get started.",
        name: "Mark Zuckerberg",
        designation: "CEO",
        company: "Facebook",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Crown Clothing Shop",
      description:
        "A Reactjs ecommerce web that allows users to signin, signup, add to cart, discharge the products, and more!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "stylecomponent",
          color: "pink-text-gradient",
        },
      ],
      image: crwnShop,
      source_code_link: "https://github.com/sDuyToans/crwn-clothingShop",
      web_link: 'https://stellar-youtiao-72a013.netlify.app/'
    },
    {
      name: "Clips",
      description:
        "A Angularjs web that allows user to signin, signup, upload videos and more!",
      tags: [
        {
          name: "angularjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "webassembly",
          color: "pink-text-gradient",
        },
      ],
      image: clips,
      source_code_link: "https://github.com/sDuyToans/clips",
      web_link: 'https://clips-sduytoans.vercel.app/'
    },
    {
      name: "Blur your image",
      description:
        "A common web that you can blur the input img by using the power of Rust languagge",
      tags: [
        {
          name: "rust",
          color: "blue-text-gradient",
        },
      ],
      image: blurimg,
      source_code_link: "https://github.com/sDuyToans/BLUR_IMAGE",
      web_link: 'https://blur-image-effect.vercel.app/'
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };