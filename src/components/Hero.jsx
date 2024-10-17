import heroImg from '../assets/kesang.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import twitterLight from '../assets/twitter-light.svg';
import twitterDark from '../assets/twitter-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import CV from '../assets/cv.pdf';
import { useTheme } from '../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="md:flex-row-reverse md:items-center md:justify-evenly flex flex-col justify-center gap-[20px] text-center h-[100dvh] min-h-[500px]">
      <div className="relative">
        <img
          src={heroImg}
          className="lg:max-w-[350px] lg:w-[350px] xl:max-w-[400px] xl:w-[400px] max-w-[200px]"
          alt="Profile Image"
        />
        <img
          className="absolute right-0 top-0 w-[25px] hover:cursor-pointer"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <h1 className='rubik text-[32px] uppercase text-[var(--text-color)] m-0 p-0'>
         Kesang
          <br />
         Lama
        </h1>
        <h2 className='monos font-bold text-[20px] uppercase text-[var(--text-color)] m-0 p-0'>Full Stack Developer</h2>
        <span className="flex justify-center gap-[25px]">
          <a className='w-fit self-center' href="https://twitter.com/" target="_blank">
            <img className='w-[30px]' src={twitterIcon} alt="Twitter icon" />
          </a>
          <a className='w-fit self-center' href="https://github.com/ravenda7" target="_blank">
            <img className='w-[30px]' src={githubIcon} alt="Github icon" />
          </a>
          <a className='w-fit self-center' href="https://linkedin.com/" target="_blank">
            <img className='w-[30px]' src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="max-w-[24ch] monos text-[16px] font-medium uppercase text-[var(--text-color)] m-0 p-0">
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="bg-[var(--btn-color)] text-[var(--btn-text-color)] border-none rounded-[20px] w-[126px] h-[50px] text-[20px] text-center pb-2 font-bold shadow-md hover:scale-105 active:translate-y-[6px] active:shadow-sm duration-200 ease-in-out">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
