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

  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Desarrolladora Web ",
    icon: web,
  },
  {
    title: " Desarrolladora React Native ",
    icon: mobile,
  },
  {
    title: " Desarrolladora Backend ",
    icon: backend,
  },
  {
    title: "Desarrolladora Front",
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "",
    icon: docker,
  },
];

  const experiences = [
  {
    title: "",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Soy una profesional altamente adaptable, capaz de enfrentar desafíos con éxito en entornos dinámicos. Mi enfoque en la adaptabilidad se complementa con una sólida orientación al cliente, buscando comprender y satisfacer sus necesidades.",
    ],
  },
    {
    title: "",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Hablo árabe nativo, francés nativo y español fluido, lo que me permite comunicarme con fluidez en diferentes contextos culturales.",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Soy perseverante, resiliente y paciente, lo cual me ayuda a superar desafíos y adaptarme a nuevas situaciones con éxito..",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Como mujer, disfruto trabajando en equipo y participando activamente, colaborando para lograr resultados exitosos.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mi primer proyecto en Aframe",
    name: "",
    designation: "",
    company: "",
    image: ".jpg",
  },
  {
    testimonial:
      "",
    name: "el marabilloso cubo",
    designation: "",
    company: "",
    image: ".",
  },
  {
    testimonial:
      "",
    name: " ",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Dulces Argelinos",
    description:
      "",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaSript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Desayuno en la Cama",
    description:
      "",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Api de Github",
    description:
      "Consumir una api de github.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
