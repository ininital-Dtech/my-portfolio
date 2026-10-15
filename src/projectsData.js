// import ridersCover from "./assets/images/riders.png";
// import portfolioCover from "./assets/images/portfolio.png";
// import coffeeCover from "./assets/images/coffee.png";
// import videoCover from "./assets/images/video.png";
// import animationCover from "./assets/images/animation.png";
// import specialistCover from "./assets/images/specialist.png";
import ridersconnect from "./assets/ridersconnect.jpg";

import ridersconnect2 from "./assets/ridersconnect2.png";
import ridersconnect4 from "./assets/ridersconnect4.png";
import ridersconnect3 from "./assets/ridersconnect3.png";
import ridersconnect5 from "./assets/ridersconnect5.png";

import portfolio from "./assets/portfolio.png";
import portfolio2 from "./assets/portfolio2.png";
import portfolio3 from "./assets/portfolio3.png";
import portfolio4 from "./assets/portfolio4.png";
import portfolio5 from "./assets/portfolio5.png";

import coffeeshop1 from "./assets/coffeeshop1.png";
import coffeeshop2 from "./assets/coffeeshop2.png";
import coffeeshop3 from "./assets/coffeeshop3.png";
import coffeeshop4 from "./assets/coffeeshop4.png";

import videocover1 from "./assets/videocover1.png";
import videocover2 from "./assets/videocover2.png";
import videocover3 from "./assets/videocover3.png";



const projects = {
  riders: {
    title: "RidersConnect",
    category: "Mobile Application",
    description:
      "RidersConnect aims to make motorcycle group rides easier to organize by helping riders share locations, communicate, and discover destinations..",
    technologies: ["Flutter", "Laravel", "Google Maps API", "Reverb" ,"Tailwind"],
    features: [
      "Real-Time Location Sharing – Share live locations with other riders to make meetups and group rides easier.",
      "Tourist Spot Explorer – Discover tourist attractions in Tarlac, with destination details, ratings, categories, and location information.",
      "Trip Itinerary Planner – Create a travel itinerary by adding multiple destinations and viewing the estimated total distance.",
      "Navigation and Directions – Get directions to selected destinations to help plan routes and navigate trips.",
      "Chat and Messaging – Communicate with friends and groups through individual and group conversations.",
      "User-Friendly Interface – Navigate between chats, tourist spots, itineraries, and settings through a simple mobile interface.",
    ],
    overview:
      "RidersConnect is a mobile application that brings riders together through real-time location sharing, group messaging, tourist spot discovery, and trip itinerary planning. Featuring destination ratings, categorized attractions, route directions, and distance estimates, it helps riders explore new places and organize their journeys more conveniently.",
    role: "Full-stack Developer",
    status: "Completed",
    // image: ridersCover,
    screenshots: [ridersconnect, ridersconnect2 , ridersconnect3 , ridersconnect4 , ridersconnect5],
    links: [{ label: "Github", url: "https://github.com/ininital-Dtech/ridersconnect-flutter"}], // e.g. [{ label: "GitHub", url: "https://github.com/your-username/repo" }]
  },

  portfolio: {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A responsive personal portfolio website developed with React to showcase my skills, projects, and creative work.",
    technologies: ["React", "HTML", "JavaScript", "CSS"],
    features: [
      "Interactive Project Showcase – Explore my web development projects through dedicated project detail pages",
      "Responsive Design – Enjoy a layout designed to adapt to different screen sizes and devices.",
      "About Me Section – Learn about my background, interests, and journey as a developer.",
      "Skills Showcase – Discover the programming languages, frameworks, and tools I work with.",
      "Engaging Visual Design – Experience a dark-themed interface with orange accents, custom imagery, and a consistent visual style.",
      "Easy Navigation – Move between sections and explore my portfolio with a simple, intuitive interface.",
    ],
    overview:
      "This personal portfolio website is designed to showcase my skills, projects, and creativity as a Fullstack Developer. Featuring a modern dark theme with orange accents, smooth navigation, and engaging visual elements, it offers visitors an enjoyable experience as they explore my work, learn more about me, and discover the projects I have built. This website also serves as one of my own projects, reflecting my passion for web development, design, and creating user-friendly digital experiences.",
    role: "Designer & Developer",
    status: "Completed",
    // image: portfolioCover,
    screenshots: [ portfolio , portfolio2 , portfolio3 , portfolio4 , portfolio5],
    links: [{label:"Github", url: "https://github.com/ininital-Dtech/my-portfolio"}],
  },

  coffee: {
    title: "CoffeeShop Website",
    category: "Web Development",
    description:
      "A PHP and MySQL coffee shop website featuring CRUD operations, order management, automatic price calculation, and receipt generation.",
    technologies: ["PHP", "MySQL", "CSS", "JavaScript", "HTML"],
    features: [
      "CRUD Operations – Create, read, update, and delete coffee product and order records.",
      "Coffee Product Management – Organize and maintain product information and pricing.",
      "Order Management – Record and manage customer coffee orders.",
      "Automatic Price Calculation – Calculate order totals based on selected products and quantities.",
      "Receipt Generation – Generate receipts containing order details and total costs.",
      "Database Integration – Use MySQL to store and retrieve product and transaction information",
      "User-Friendly Interface – Provide a simple and organized interface for managing coffee shop operations.",
    ],
    overview:
      "This coffee shop website is a web-based ordering and management system developed using PHP and MySQL. It allows users to browse coffee products, place orders, and view their order details, while providing an efficient way to manage product records and customer transactions. With CRUD functionality, automatic price calculation, and receipt generation, the project demonstrates my ability to build functional, database-driven web applications that simplify everyday business operations.",
    role: "Full-stack Developer",
    status: "Completed",
    // image: coffeeCover,
    screenshots: [coffeeshop1 , coffeeshop2 , coffeeshop3 , coffeeshop4],
    links: [{label:"Github", url:"https://github.com/ininital-Dtech/PHP-CRUD--ADRINO"}],
  },

  video: {
    title: "Video Editing",
    category: "Creative Production",
    description:
      "Creative video editing with smooth transitions, visual effects, and engaging storytelling.",
    technologies: ["CapCut", "Photoshop", "ChatGPT"],
    features: [
      "Video Cuts and Transitions – Create smooth scene changes and maintain a natural flow throughout each video.",
      "Visual Effects and Enhancements – Apply effects and adjustments to improve video quality and visual appeal.",
      "Text and Graphic Integration – Add titles, captions, and graphic elements to support the message.",
      "Audio Synchronization – Align music, sound effects, and voiceovers with the visuals.",
      "Creative Storytelling – Arrange clips and scenes to create engaging and meaningful stories.",
      "Digital Content Production – Create video content suitable for presentations, social media, and other creative projects.",
    ],
    overview:
      "This project showcases my creativity and skills in video editing and digital content production. I create engaging videos by combining smooth transitions, visual effects, color adjustments, text animations, and carefully timed audio to deliver a compelling viewing experience. My goal is to transform raw footage into polished content that communicates ideas effectively, captures attention, and brings stories to life.",
    role: "Video Editor",
    status: "Ongoing",
    // image: videoCover,
    screenshots: [ videocover1 , videocover2 , videocover3 ],
    links: [{label: "Tiktok", url: "https://www.tiktok.com/@codewithbert"}],
  },

  animation: {
    title: "Animation 2D/3D",
    category: "Animation",
    description:
      "Experimenting with 2D animation using Spine 2D for game assets and mini-games.",
    technologies: ["Spine 2D", "Photoshop"],
    features: [
      "Character Rigging – Build skeletal rigs and set up bones to control character movements.",
      "Mesh Creation and Deformation – Create meshes that allow smooth bending and deformation during animation.",
      "2D Character Animation – Animate characters with natural movements, poses, and expressions.",
      "Sprite and Game Asset Preparation – Prepare and organize character artwork using Photoshop.",
      "Movement and Motion Experiments – Explore different animation techniques to improve fluidity and visual quality.",
    ],
    overview:
      "This project showcases my skills in 2D character animation using Spine 2D, focusing on character rigging, mesh creation, and movement animation. I create skeletal rigs, set up meshes for smooth deformations, and animate characters to bring them to life. Combined with Photoshop for asset preparation, my workflow focuses on creating expressive, reusable animations and game-ready assets for interactive experiences and mini-games.",
    role: "Animator",
    status: "On Going",
    // image: animationCover,
    screenshots: [],
    links: [],
  },

  specialist: {
    title: "Game & Content Specialist",
    category: "Work Experience",
    description:
      "Working on game and digital content production while exploring creative and technical workflows.",
    technologies: [
      "Photoshop",
      "Capcut",
      "ChatGPT",
      "Spine2D",
      "Canva",
    ],
    features: [
      "Video Editing – Edit video content using cuts, transitions, visual effects, and audio synchronization.",
      "Photo Editing – Enhance images, adjust colors, and prepare visual assets for digital use.",
      "Animation – Experiment with 2D animation and movement to bring characters and visual elements to life.",
      "Digital Content Production – Create and refine multimedia content for different creative needs.",
      "Creative Collaboration – Support project goals by combining visual design, editing, and content production skills.",
      "Continuous Improvement – Explore new tools, techniques, and workflows to improve the quality of creative output.",
    ],
    overview:
      "As a Game & Content Specialist at HyperbondStudio, I work on game-related projects and digital content production, combining creativity with technical skills to create engaging visual content. My responsibilities include video editing, photo editing, animation experiments, and preparing creative assets for digital projects. This role allows me to explore new creative workflows, improve my production skills, and contribute to developing visually appealing content for games and other digital media.",
      role: "Game & Content Specialist",
      status: "Working Experience",
    // image: specialistCover,
    screenshots: [],
    links: [],
  },
};

export default projects;