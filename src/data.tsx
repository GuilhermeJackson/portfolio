import AboutInc from "../src/assets/svg/about/about-successful-man.svg";
import Technology from "../src/assets/svg/tecnology/tecnology.svg";
import Logo from "../src/assets/svg/about/about-successful-man.svg"
import Cat from "../src/assets/img/cat/cat.jpg";
import { TfiLinkedin, TfiGithub, TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import {
  SiLess,
  SiTailwindcss,
  SiCypress,
  SiTypescript,
  SiApacheecharts,
} from "react-icons/si";
import {
  DiSass,
  DiScrum,
  DiJava,
  DiHtml5,
  DiCss3,
  DiReact,
  DiAngularSimple,
  DiAndroid,
  DiJavascript1,
} from "react-icons/di";

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'Sobre mim', href: '/' },
  { name: 'Mascote', href: '/' },
  { name: 'Tecnologias', href: '/' },
  // { name: 'Portfólio'},
  { name: 'Contato', href: '/' }
];

export const banner = {
  titlePart1: "Olá! meu nome é Guilherme Lamim",
  titlePart2: '& Desenvolvedor front-end',
  titlePart3: '',
  subtitle:
    "Meu propósito é criar soluções modernas e acessíveis para facilitar a vida dos usuários.",
  textBtn: "Github",
  img: "",
};

export const about = {
  icon: AboutInc,
  title: "Sobre mim",
  subtitle1:
    "Desenvolvedor front-end com experiência em React, Angular, Javascript, Typescript," +
    " Cypress, NZ-zorro e consumo de APIs REST. Sou apaixonado por soluções acessíveis e " +
    "modernas. Também tenho experiência em projetos gerenciados por Metodologias Ágeis.",
  subtitle2:
    "Formado em Sistemas de Informação em 2022, pela Uniasselvi, onde tive meu" +
    " primeiro contato com tecnologia. Em 2019 iniciei o curso de formação de desenvolvimento" +
    " Android e iOS pela Proway, como parte do programa Padawan da AmbevTech. Também tive o prazer de trabalhar " +
    "por 2 anos como front-end na maior e mais complexa cervejaria do mundo, a Ambev, que me " +
    "permitiu pôr em prática todo conhecimento adquirido na faculdade e foi muito importante " +
    " para o desenvolvimento das minhas habilidades técnicas e comunicação.",
  linkedin: "Linkedin",
  instagram: "Instagram",
};

export const cat = {
  title: "Olá! meu nome é Edgar",
  subtitle:
    "Fui abandonado pelos meus antigos donos quando ainda era pequeno, o Guilherme me deu um lar e desde então o acompanho enquanto ele coda e joga League of Legends.",
  image: Cat,
};

export const tecnologies = {
  title: "Tecnologias",
  icon: Technology,
};

export const contact = {
  title: "Contato",
};

interface ColorIcon {
  color: string
}

const color = "#131316";
export const contactItems = {
  contactsItems: [
    {
      icon: <TfiEmail size={40} color={color} />,
      title: "E-mail",
      myContact: "guilherme.lamim96@gmail.com",
      url: "mailto:guilherme.lamim96@gmail.com",
      id:1
    },
    {
      icon: <BsTelephone size={40} color={color} />,
      title: "Telefone",
      myContact: "(47) 99105-6721",
      url: "https://wa.me/5547991056721",
      id:2
    },
    {
      icon: <TfiLinkedin size={40} color={color} />,
      title: "Linkedin",
      myContact: "@guilhermelamim",
      url: "https://www.linkedin.com/in/guilhermelamim/",
      id:3
    },
    {
      icon: <TfiGithub size={40} color={color} />,
      title: "Github",
      myContact: "@guilhermejackson",
      url: "https://github.com/GuilhermeJackson",
      id: 4
    },
  ],
};

export const tecnologiesSlider = {
  tecnologies: [
    {
      image: <DiReact size="9.5rem" color="#61dafb" />,
      name: "React",
    },
    {
      image: <DiAngularSimple size="9.5rem" color="#aa2a2c" />,
      name: "Angular",
    },
    {
      image: <DiHtml5 size="9.5rem" color="#E44D26" />,
      name: "HTML 5",
    },
    {
      image: <DiCss3 size="9.5rem" color="#1572b6" />,
      name: "CSS",
    },
    {
      image: <SiTailwindcss size="9.5rem" color="#38bdf8" />,
      name: "Tailwind ",
    },
    {
      image: <DiAndroid size="9.5rem" color="#73bb56" />,
      name: "Android",
    },
    {
      image: <DiJavascript1 size="9.5rem" color="#efd81d" />,
      name: "Javascript",
    },
    {
      image: <SiTypescript size="9.5rem" color="#2f74c0" />,
      name: "Typescript",
    },
    {
      image: <DiJava size="9.5rem" color="#5283a2" />,
      name: "Java",
    },
    {
      image: <SiCypress size="9.5rem" color="#23252d" />,
      name: "Cypress",
    },
    {
      image: <SiApacheecharts size="9.5rem" color="#e43961" />,
      name: "eCharts",
    },
    {
      image: <DiScrum size="9.5rem" color="#3a7b97" />,
      name: "Scrum",
    },
    {
      image: <SiLess size="9.5rem" color="#254675" />,
      name: "Less",
    },
    {
      image: <DiSass size="8.5rem" color="#c66394" />,
      name: "SASS",
    },
  ],
};
