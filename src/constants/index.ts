import {
  AiFillGithub,
    AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";
import { Logo, Profile } from "../../public/assets/images";
import {
  Firebase,
  // Figma,
  Docker,
  Devops,
  Bootstrap,
  Aws,
  Antd,
  Agora,
  Typescript,
  Tailwind,
  Stripe,
  Socket,
  Redux,
  ReactQuery,
  React,
  Postgres,
  Paypal,
  NodeJS,
  Nginx,
  Nest,
  Next,
  Mysql,
  MUI,
  MongoDB,
  Microservices,
  Javascript,
  // IOS,
  i18Next,
  GraphQL,
  GithubActions,
  Git,
  Gcp,
  Android,
} from "../../public/assets/images/techs";

import { Paul, Issac, Saif, Orianne } from "../../public/assets/images/clients";
import {
  Trally,
  Cryptosystem,
  Englishcafe,
  Hopamenu,
  Simplytranslate,
  Teeq,
  Travelfine,
  Weditt,
  BlackTravels,
  Keto,
  Rega,
  Recipes
  // Extensia,
} from "../../public/assets/images/projects";
import { Bevo, Car, Romi, Truck } from "../../public/assets/images/projects/index";
const PORTFOLIO_DATA = {
  PROFILE: {
    name: "Muhammad Kaleem",
    shortName: "Kaleem",
    username: "muhammadkaleem171",
    email: "Malikkaleem171@gmail.com",
    title: "Full-Stack Developer",
    logo: Logo,
    photo: Profile,
  },
  SOCIAL_LINKS: [
    {
      id: 1,
      icon: AiFillGithub,
      href: "https://github.com/MuhammadKaleem171/",
    },
    {
      id: 2,
      icon: BsStackOverflow,
      href:"https://stackoverflow.com/users/13468620/malikkaleem"
    },
    {
      id: 4,
      icon: AiFillInstagram,
      href: "https://www.instagram.com/malikkaleem438/",
    },
    {
      id: 5,
      icon: AiFillTwitterCircle,
      href: "https://twitter.com/malikkaleem438",
    },
    {
      id: 6,
      icon: AiFillLinkedin,
      href: "https://www.linkedin.com/in/muhammad-kaleem-330b6b118/",
    },
  ],
  LINKS: [
    {
      id: 1,
      name: "Projects",
      href: "#projects",
    },
    {
      id: 2,
      name: "Services",
      href: "#services",
    },
    {
      id: 3,
      name: "Contact",
      href: "#contact",
    },
  ],
  PROJECTS: [
    {
      id: 1,
      title: "Trally",
      subtitle: "Virtual Tour Experience",
      logo: Profile,
      thumbnail: Trally,
      href: "https://app.trally.com",
      platforms: ["web", "mobile"],
    },
    {
      id: 2,
      title: "Simply Translate",
      subtitle: "Translations got easy",
      logo: Profile,
      thumbnail: Simplytranslate,
      href: "https://www.simplytranslate.com",
      platforms: ["web"],
    },
    {
      id: 3,
      title: "Hopa Menu",
      subtitle: "Digital Food Menu",
      logo: Profile,
      thumbnail: Hopamenu,
      href: "https://www.hopamenu.com/CqLrd8icbqPa58JZoXSo1dtsATA3",
      platforms: ["web"],
    },
    {
      id: 4,
      title: "Romi.ai",
      subtitle: "ROMI system is a web application that connects to Facebook Ads Manager and Google Ads",
      logo: Profile,
      thumbnail: Romi,
      href: "https://www.weditt.com",
      platforms: ["web"],
    },
    {
      id: 5,
      title: "Ketopet",
      subtitle: "A  application for creating and managing Diet for Dog on basis of Activity , weight, Shape",
      logo: Profile,
      thumbnail: Keto,
      href: "https://play.google.com/store/apps/details?id=com.ketopet&pli=1",
      platforms: ["web", "mobile"],
    },
    // {
    //   id: 6,
    //   title: "Rega",
    //   subtitle: "The app offers everyone who wants to, practice and experience mindfulness, anywhere, anytime, and with pleasant voice guidance for listening - in Hebrew!",
    //   logo: Profile,
    //   thumbnail: Rega,
    //   href: "https://play.google.com/store/apps/details?id=com.rega.regaapp",
    //   platforms: ["Mobile"],
    // },
    {
      id: 8,
      title: "Recipe app",
      subtitle: "Get a today recipe by spinner the wheel",
      logo: Profile,
      thumbnail: Recipes,
      href: "#",
      platforms: ["Mobile"],
    },
    {
      id: 7,
      title: "Black Travel",
      subtitle: "Find Travel Partners",
      logo: Profile,
      thumbnail: BlackTravels,
      href: "https://blacktravelconnects.com",
      platforms: ["web"],
    },
   
    {
      id: 8,
      title: "Bevo",
      subtitle: "Bevo is ecommerce app",
      logo: Profile,
      thumbnail: Bevo,
      href: "https://www.harmonize.vip",
      platforms: ["Mobile"],
    },
    {
      id: 9,
      title: "Truck",
      subtitle: "An app for keeping the Record of your Truck expense, service, Driver , route and work order",
      logo: Profile,
      thumbnail: Truck,
      href: "https://marketplace.englishcafe.es",
    },
  
    {
      id: 11,
      title: "My carbeing",
      subtitle: "An app for keep the record of your car expense and servicesd detail",
      logo: Profile,
      thumbnail: Car,
      href: "https://app.pledgegarden.com",
    },
  
  ],
  TECHNOLOGIES: [
    {
      id: 1,
      name: "React JS",
      logo: React,
    },
    {
      id: 2,
      name: "Next JS",
      logo: Next,
    },
    {
      id: 3,
      name: "Node JS",
      logo: NodeJS,
    },
    {
      id: 4,
      name: "Nest JS",
      logo: Nest,
    },
    {
      id: 5,
      name: "Javascript",
      logo: Javascript,
    },
    {
      id: 6,
      name: "Typescript",
      logo: Typescript,
    },
    {
      id: 7,
      name: "Redux",
      logo: Redux,
    },
    {
      id: 8,
      name: "React Query",
      logo: ReactQuery,
    },
    {
      id: 9,
      name: "MUI",
      logo: MUI,
    },
    {
      id: 10,
      name: "Antd",
      logo: Antd,
    },
    {
      id: 11,
      name: "Bootstrap",
      logo: Bootstrap,
    },
    {
      id: 12,
      name: "Tailwind",
      logo: Tailwind,
    },
    {
      id: 13,
      name: "i18Next",
      logo: i18Next,
    },
    {
      id: 14,
      name: "Firebase",
      logo: Firebase,
    },
    {
      id: 15,
      name: "Postgres",
      logo: Postgres,
    },
    {
      id: 16,
      name: "MongoDB",
      logo: MongoDB,
    },

    {
      id: 17,
      name: "MySQL",
      logo: Mysql,
    },
    {
      id: 18,
      name: "Microservices",
      logo: Microservices,
    },
    {
      id: 19,
      name: "Git",
      logo: Git,
    },
    {
      id: 20,
      name: "Gcp",
      logo: Gcp,
    },
    {
      id: 21,
      name: "Aws",
      logo: Aws,
    },
    {
      id: 22,
      name: "Github Actions",
      logo: GithubActions,
    },
    {
      id: 23,
      name: "Devops",
      logo: Devops,
    },
    {
      id: 24,
      name: "Docker",
      logo: Docker,
    },
    {
      id: 25,
      name: "Socket",
      logo: Socket,
    },
    {
      id: 26,
      name: "Stripe",
      logo: Stripe,
    },
    {
      id: 27,
      name: "Paypal",
      logo: Paypal,
    },
    {
      id: 28,
      name: "Nginx",
      logo: Nginx,
    },
    {
      id: 29,
      name: "GraphQL",
      logo: GraphQL,
    },
    {
      id: 30,
      name: "Agora",
      logo: Agora,
    },
  ],
  SERVICES: [
    {
      id: 2,
      title: "Frontend",
      subtitle:
        "Responsive and pixel perfect interface development. React JS, Next JS, React Native",
      logo: React,
    },
    {
      id: 3,
      title: "Mobile App",
      subtitle:
        "Design, development, api integration and deployement of Android and IOS applications",
      logo: Android,
    },
    {
      id: 1,
      title: "Backend",
      subtitle:
        "RESTful API with all kind of databases. Node JS, Express JS, Nest JS.",
      logo: NodeJS,
    },
    {
      id: 4,
      title: "Deployement",
      subtitle:
        "GCP, AWS, Digital Ocean, VPS deployement with automation configuration",
      logo: Devops,
    },
  ],
  TESTIMONIALS: [
    {
      id: 1,
      name: "Orianne Blum",
      title: "Product Manager",
      picture: Orianne,
      review:
        "We hired him for building a crypto system demo and he did an absolute great job! He is so attentive and communicative which is the most important thing!",
    },
    {
      id: 2,
      name: "Saif Al Abdily",
      title: "Senior Designer",
      picture: Saif,
      review:
        "Talha exceeded my expectations with their web development skills. His communication was excellent, and I highly recommend his services.",
    },
    {
      id: 3,
      name: "Isaac L.",
      title: "Network Manager",
      picture: Issac,
      review:
        "Greate communication and puts a lot of effort so that everything works as it should and requested. Has good knowledge on development.",
    },
    {
      id: 4,
      name: "Paul Prabhakarand",
      title: "Project Manager",
      picture: Paul,
      review:
        "He is a good developer. Understands the requirement well and delivers what client expects.",
    },
  ],
};

export default PORTFOLIO_DATA;
