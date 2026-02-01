const navLinks = [
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "AI",
    link: "#AI",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name:'Certifications',
    link:"#certifications"
  }
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },

  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

export const certifications = [
  {
    id: 1,
    name: "Oracle Cloud Infrastructur 2025 Generative AI Professional",
    date: "JUL 2025",
    link: "#",
    logo: "/Oracle_Logo.svg.png",
    issuer: "Oracle",
  },
  {
    id: 2,
    name: "IBM GenAI",
    date: "Jun 2025",
    link: "#",
    logo: "/ibm.png",
    issuer: "IBM",
  },
  {
    id: 3,
    name: "The Bits and Bytes of Computer Networking",
    date: "Nov 2025",
    link: "#",
    logo: "/Google.png",
    issuer: "Google",
  },
  {
    id: 4,
    name: "Introduction to Machine Learning",
    date: "May 2025",
    link: "#",
    logo: "/Unknown.jpeg",
    issuer: "NPTEL",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

const counterItems = [
  {
    id: 1,
    value: 90,
    label: "DSA Problem solved",
    suffix: "+",
  },
  {
    id: 2,
    value: 5, // Replace with your Project count (AgroMind, VidyaDrishti, etc.)
    label: "Projects Completed",
    suffix: "",
  },
  {
    id: 3,
    value: 3, // Replace with Hackathons (SIH, GenAI, etc.)
    label: "Hackathons Participated",
    suffix: "",
  },
  {
    id: 4,
    value: 12, // Suggestion: Technologies you know (React, Node, Mongo, Tailwind, etc.)
    label: "Technologies Mastered",
    suffix: "+",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

//  const logoIconsList = [
//   { name: "JavaScript" },
//   { name: "React" },
//   { name: "Nodejs" },
//   { name: "MongoDB" },
//   { name: "Express" },
//   { name: "Java" },
//   { name: "GitHub" },
//   // { name: "REST APIs" },
//   { name: "Python" },
//   { name: "FastAPI" },
//   { name:"Nextjs"},
//   { name: "MySQL" },
//   { name: "GSAP" },

// ];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

// const techStackIcons = [
//   {
//     name: "React Developer",
//     modelPath: "/models/react_logo-transformed.glb",
//     scale: 1,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Python Developer",
//     modelPath: "/models/python-transformed.glb",
//     scale: 0.8,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Backend Developer",
//     modelPath: "/models/node-transformed.glb",
//     scale: 5,
//     rotation: [0, -Math.PI / 2, 0],
//   },
//   {
//     name: "Interactive Developer",
//     modelPath: "/models/three.js-transformed.glb",
//     scale: 0.05,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Project Manager",
//     modelPath: "/models/git-svg-transformed.glb",
//     scale: 0.05,
//     rotation: [0, -Math.PI / 4, 0],
//   },
// ];

const techStackIcons = [
  {
    id: 1,
    name: "Full Stack", // Covers React, Next.js, Tailwind
    sub: "MERN & Modern UI",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    id: 2,
    name: "System Design", // Covers Node, Express, Databases
    sub: "Scalable Backend Logic",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    id: 3,
    name: "AI & Logic", // Covers Python, GenAI, and Data
    sub: "Python & GenAI Integration",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    id: 4,
    name: "Creative Dev", // Covers Three.js, GSAP
    sub: "Immersive 3D Web",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    id: 5,
    name: "Professional Tools", // Covers Git, Postman, Linux
    sub: "Git & Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const logoItems = [
  { id: 1, name: "MongoDB", img: "/images/logos/mongodb.png" },
  { id: 2, name: "Express", img: "/images/logos/express.png" },
  { id: 3, name: "Tailwind CSS", img: "/images/logos/tailwind.png" },
  { id: 4, name: "TypeScript", img: "/images/logos/typescript.png" },
  { id: 5, name: "Java", img: "/images/logos/java.png" }, // For DSA
  { id: 6, name: "C++", img: "/images/logos/cpp.png" }, // For DSA
  { id: 7, name: "Postman", img: "/images/logos/postman.png" },
  { id: 8, name: "Figma", img: "/images/logos/figma.png" },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url:"https://www.instagram.com/harshvst_258?igsh=czhmbWdraGlnYnJn"
  },
  {
    name: "github",
    imgPath: "/icons8-github-24.png",
    url:"https://github.com/harsh-2508"
  },
  {
    name: "Leetcode",
    imgPath: "/icons8-leetcode-24.png",
    url:"https://leetcode.com/u/harshvardhan_2508/"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/harshvardhan-singhthakur25?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
