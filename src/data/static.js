
import LinkedinIcon from "../assets/social-icons/linkedin.png";
import GithubIcon from "../assets/social-icons/github.png";
import ResumeIcon from "../assets/social-icons/resume.png";
import ReactLogo from "../assets/img/react.png";
import NextLogo from "../assets/img/next.png";
import ReduxLogo from "../assets/img/redux.png";
import ReactQueryLogo from "../assets/img/react-query.png";
// import HTMLLogo from "../assets/img/html.png";
// import CSSLogo from "../assets/img/css.png";
import SCSSLogo from "../assets/img/scss.png";
import GitLogo from "../assets/img/git.png";
import MuiLogo from "../assets/img/mui.png";
import FluentUILogo from "../assets/img/fluent-ui.png";
import ReactstrapLogo from "../assets/img/reactstrap.png";
import BootstrapLogo from "../assets/img/bootstrap.png";
import JSLogo from "../assets/img/js.png";
import TSLogo from "../assets/img/ts.png";
import EmergeAbility from "../assets/img/emergeability.png";
import EmergeAbilityWebsite from "../assets/img/emergeability-website.jpg";

export const myDetails = {
    personal: {
        name: 'Dikshitkumar N',
        designation: 'Front End Developer',
        aboutMe: [
            'I develop innovative websites with attractive designs and great user experience.',
            'For past 2.5 years, I have been part of contract based projects, full time developer and as a freelancer.',
            'Still practicing to perfectly master my skills.'
        ],
        contact: {
            email: 'dikshitkumarn@gmail.com',
            number: '9600714338',
        }
    },
    social: {
        linkedin: {
        image: LinkedinIcon,
        link: "https://www.linkedin.com/in/dikshitkumar-n-b66177199/",
        },
        github: {
        image: GithubIcon,
        link: "https://github.com/dikshit-n?tab=repositories",
        },
        resume: {
        image: ResumeIcon,
        link: "https://dikshit-n.github.io/resume/Resume.pdf",
        },
    },
    projects: [
        {
        name: "EmergeAbility",
        link: "http://emergeability.org/",
        image: EmergeAbility,
        embedLink: "http://emergeability.org/",
        previewImage: EmergeAbilityWebsite,
        },
    ],
    skills: {
        react: { link: "https://reactjs.org/", image: ReactLogo, name: 'React JS' },
        next: { link: "https://nextjs.org/", image: NextLogo, name: 'Next JS' },
        redux: { link: "https://redux.js.org/", image: ReduxLogo, name: 'Redux JS' },
        reactQuery: {
        link: "https://react-query.tanstack.com/",
        image: ReactQueryLogo,
        name: 'React Query'
        },
        // html: {
        // link: "https://www.w3schools.com/html/html_intro.asp",
        // image: HTMLLogo,
        // name: 'HTML'
        // },
        // css: {
        // link: "https://www.w3schools.com/css/css_intro.asp",
        // image: CSSLogo,
        // name: 'CSS'
        // },
        scss: { link: "https://sass-lang.com/", image: SCSSLogo, name: 'SCSS' },
        git: { link: "https://github.com/", image: GitLogo, name: 'Git / Github' },
        mui: { link: "https://mui.com/", image: MuiLogo, name: 'Material UI' },
        fluentUI: { link: "https://react.fluentui.dev/", image: FluentUILogo, name: 'Fluent UI' },
        reactstrap: { link: "https://reactstrap.github.io/", image: ReactstrapLogo, name: 'Reactstrap' },
        bootstrap: { link: "https://getbootstrap.com/", image: BootstrapLogo, name: 'Bootstrap' },
    },
    programingLanguage: {
        javascript: { link: "https://www.javascript.com/", image: JSLogo },
        typescript: { link: "https://www.typescriptlang.org/", image: TSLogo },
    },
}