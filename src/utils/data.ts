import JavascriptIcon from "./../assets/js.png";
import TypescriptIcon from "./../assets/typescript.png";
import ReactIcon from "./../assets/react.svg";
import TailwindIcon from "./../assets/icons8-tailwindcss.svg";
import NextIcon from "./../assets/next.svg";
import ViteIcon from "./../assets/vite.svg";
import FramerIcon from "./../assets/icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-48.png";
import ReduxIcon from "./../assets/icons8-redux.svg";
import HtmlIcon from "./../assets/icons8-html-5.svg";
import CssIcon from "./../assets/icons8-css3.svg";
import FigmaIcon from "./../assets/icons8-figma.svg";
import GitIcon from "./../assets/icons8-git.svg";
import GithubIcon from "./../assets/icons8-github.svg";
import NpmIcon from "./../assets/icons8-npm.svg";
import VisualStudioIcon from "./../assets/icons8-visual-studio-code-2019.svg";
import VercelIcon from "./../assets/vercel.svg";

export const stacks: any = {
  HTML: { name: "HTML", src: HtmlIcon, desc: "Advanced" },
  CSS: { name: "CSS", src: CssIcon, desc: "Advanced" },
  JS: { name: "Javascript", src: JavascriptIcon, desc: "Advanced" },
  Tailwind: { name: "TailwindCSS", src: TailwindIcon, desc: "Advanced" },
  React: { name: "ReactJS", src: ReactIcon, desc: "Advanced" },
  NextJS: { name: "NextJS", src: NextIcon, desc: "Intermediate" },
  Typescript: {
    name: "Typescript",
    src: TypescriptIcon,
    desc: "Intermediate",
  },
  Framer: { name: "Framer", src: FramerIcon, desc: "Beginner" },
  Redux: { name: "Redux", src: ReduxIcon, desc: "Beginner" },
};

export const tools: any = {
  Vite: { name: "Vite", src: ViteIcon, desc: "Build tool" },
  Npm: { name: "Npm", src: NpmIcon, desc: "Package manager" },
  Git: { name: "Git", src: GitIcon, desc: "Version control" },
  Github: { name: "Github", src: GithubIcon, desc: "Deploy code" },
  VisualStudio: {
    name: "VisualStudio",
    src: VisualStudioIcon,
    desc: "Code editor",
  },
  Figma: { name: "Figma", src: FigmaIcon, desc: "UI/UX design" },
  Vercel: { name: "Vercel", src: VercelIcon, desc: "Hosting App" },
};
