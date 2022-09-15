import { FaGithub, FaHtml5, FaJs, FaReact, FaVuejs } from 'react-icons/fa'
import { DiCss3, DiBootstrap } from 'react-icons/di'
import { SiTypescript, SiMaterialui, SiTailwindcss, SiQuasar } from 'react-icons/si'
import { ICardConfig } from '../../interfaces/ICardConfig'

const habilidades: ICardConfig[] = [
  {
    title: 'JavaScript',
    description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível.',
    icon: FaJs,
  },
  {
    title: 'TypeScript',
    description: 'TypeScript é um superconjunto de JavaScript que adiciona tipagem e alguns outros recursos a linguagem.',
    icon: SiTypescript,
  },
  {
    title: 'React',
    description: 'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    icon: FaReact,
  },
  {
    title: 'Vue',
    description: 'Vue.js é um framework progressivo para construção de interfaces de usuário.',
    icon: FaVuejs,
  },
  {
    title: 'HTML',
    description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
    icon: FaHtml5,
  },
  {
    title: 'CSS',
    description: 'CSS é uma linguagem usada para descrever a apresentação de um documento escrito em uma linguagem de marcação.',
    icon: DiCss3,
  },
  {
    title: 'Material UI',
    description: 'Material-UI é uma biblioteca de componentes React que implementa o Material Design.',
    icon: SiMaterialui,
  },
  {
    title: 'Bootstrap',
    description: 'Bootstrap é um framework web para desenvolvimento de componentes de interface.',
    icon: DiBootstrap,
  },
  {
    title: 'Tailwind',
    description: 'Tailwind CSS é um framework de utilitários de CSS para criar interfaces de usuário.',
    icon: SiTailwindcss,
  },
  {
    title: 'Quasar',
    description: 'Quasar é um framework Vue.js progressivo para desenvolvimento de interfaces de usuário, PWA, SSR, PWAs.',
    icon: SiQuasar,
  },
  {
    title: 'Github',
    description: 'GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.',
    icon: FaGithub,
  },
]

export default habilidades
