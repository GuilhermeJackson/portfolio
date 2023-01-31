import AboutInc from "../src/assets/svg/about/about-successful-man.svg";
import Technology from "../src/assets/svg/tecnology/tecnology.svg";
import Cat from "../src/assets/img/cat/cat.jpg";
import { TfiLinkedin, TfiGithub, TfiEmail } from "react-icons/Tfi";
import { BsTelephone } from "react-icons/Bs";
import {} from "react-icons/Tfi";
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

export const banner = {
  titlePart1: "Olá! meu nome é Guilherme Lamim",
  titlePart2: "& Desenvolvedor Front-End",
  subtitle:
    "Meu propósito é criar soluções modernas e acessíveis para facilitar a vida dos usuários.",
  textBtn: "Github",
  img: "",
};

export const about = {
  icon: AboutInc,
  title: "Sobre mim",
  subtitle1:
    "Desenvolvedor front-end com experiencia em React, Angular, Javascript, Typescript," +
    " Cypress, NZ-zorro e consummo de APIs REST. Sou apaixado por soluções acessiveis e " +
    "modernas. Também tenho experiência em projetos gerenciados por Metodologias Ágeis.",
  subtitle2:
    "Formado em Sistemas de Informação em 2022, pela Uniasselvi, onde tive meu" +
    " primeiro contato com tecnologia. Em 2019, iniciei o curso de formação de desenvolvimento" +
    " Android e iOS, pela Proway, como parte do programa da AmbevTech. Também tive o prazer de trabalhar " +
    "por 2 anos como front-end na maior e mais complexa cervejaria do mundo, a Ambev, que me " +
    "permitiu por em prática todo conhecimento adquirido na faculdade e foi muito importante " +
    " para meu desenvolvimento das minhas habilidades técnicas e comunicação.",
  subtitle3:
    "Iniciei minha formação em Sistemas de Informação em 2017, pela Uniasselvi, onde tive meu" +
    " primeiro contato com tecnologia. Em 2019, iniciei o curso de formação de desenvolvimento" +
    " Android e iOS, pela Proway, como parte do programa da maior cervejaria do mundo a AmbevTech, totalizando " +
    "560 horas de curso concluídos em 2020.",
  linkedin: "Linkedin",
  instagram: "Instagram",
};

export const cat = {
  title: "Olá, meu nome é Edgar",
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  image: Cat,
};

export const tecnologies = {
  title: "Tecnologias",
  icon: Technology,
};

export const contact = {
  title: "Contato",
};
const color = "#e7c336";
export const contactItems = {
  contactsItems: [
    {
      icon: <TfiEmail size={40} color={color} />,
      title: "E-mail",
      myContact: "guilherme.lamim96@gmail.com",
      url: "mailto:guilherme.lamim96@gmail.com"
    },
    {
      icon: <BsTelephone size={40} color={color} />,
      title: "Telefone",
      myContact: "(47) 99105-6721",
      url: "https://web.whatsapp.com/send?phone=5547991056721"
    },
    {
      icon: <TfiLinkedin size={40} color={color} />,
      title: "Linkedin",
      myContact: "@guilhermelamim",
      url: "https://www.linkedin.com/in/guilhermelamim/"
    },
    {
      icon: <TfiGithub size={40} color={color} />,
      title: "Github",
      myContact: "@guilhermejackson",
      url: "https://github.com/GuilhermeJackson"
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
