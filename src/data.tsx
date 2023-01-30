import AboutInc from '../src/assets/svg/about/about-successful-man.svg';
import Technology from '../src/assets/svg/tecnology/tecnology.svg';
import { SiLess, SiTailwindcss, SiCypress, SiTypescript, SiApacheecharts } from "react-icons/si";
import { DiSass, DiScrum, DiJava, DiHtml5,DiCss3, DiReact, DiAngularSimple, DiAndroid, DiJavascript1 } from 'react-icons/di'


export const banner = {
    titlePart1: 'Guilherme Jackson Lamim',
    titlePart2: '& Desenvolvedor front-end',
    subtitle:
      'Meu propósito é criar soluções modernas e acessíveis para facilitar a vida dos usuários.',
    textBtn: 'Github',
    img: '',
  };

  export const about = {
    icon: AboutInc,
    title: 'Sobre mim',
    subtitle1:
    'Graduado em Sistemas de Informação pela Uniasselvi, onde tive meu'+
    ' primeiro contato com tecnologia. Em 2019, iniciei o curso de formação de desenvolvimento'+
    ' Android e iOS, pela Proway, como parte do programa de formação da AmbevTech, totalizando '+
    '560 horas de curso concluídos em 2020.',
    subtitle2:
      'Alguns dos meus conhecimentos: Angular, Typescript, HTML, CSS, testes unitários do JavaScript'+
      ' com Jasmine e Karma, testes de integração com Cypress, eCharts, Azure DevOps, GIT.',
    subtitle3:
    'Iniciei minha formação em Sistemas de Informação em 2017, pela Uniasselvi, onde tive meu'+
    ' primeiro contato com tecnologia. Em 2019, iniciei o curso de formação de desenvolvimento'+
    ' Android e iOS, pela Proway, como parte do programa de formação da AmbevTech, totalizando '+
    '560 horas de curso concluídos em 2020.',
    linkedin: 'Linkedin',
    instagram: 'instagram'
  };

  export const tecnologies = {
    title: 'Tecnologias',
    icon: Technology
  }
  export const tecnologiesSlider = {
    
    title: 'Training programs',
    programs: [
      {
        image: <DiReact size='13.5rem' color='#61dafb'/>,
        name: 'React',
      },
      {
        image: <DiAngularSimple size='13.5rem' color='#aa2a2c' />,
        name: 'Angular',
      },
      {
        image: <DiHtml5 size='13.5rem' color='#E44D26'/>,
        name: 'HTML 5',
      },
      {
        image: <DiCss3 size='13.5rem' color='#1572b6'/>,
        name: 'CSS',
      },
      {
        image: <SiTailwindcss size='13.5rem' color='#38bdf8'/>,
        name: 'Tailwind ',
      },
      {
        image: <DiAndroid size='13.5rem' color='#73bb56'/>,
        name: 'Android',
      },
      {
        image: <DiJavascript1 size='13.5rem' color='#efd81d'/>,
        name: 'Javascript',
      },
      {
        image: <SiTypescript size='13.5rem' color='#2f74c0' />,
        name: 'Typescript',
      },
      {
        image: <DiJava size='13.5rem' color='#5283a2' />,
        name: 'Java',
      },
      {
        image: <SiCypress size='13.5rem' color='#23252d' />,
        name: 'Cypress',
      },
      {
        image: <SiApacheecharts size='13.5rem' color='#e43961' />,
        name: 'eCharts',
      },
      {
        image: <DiScrum size='13.5rem' color='#3a7b97' />,
        name: 'Scrum',
      },
      {
        image: <SiLess size='13.5rem' color='#254675' />,
        name: 'Less',
      },
      {
        image: <DiSass size='13.5rem' color='#c66394' />,
        name: 'SASS',
      }
    ],
  };