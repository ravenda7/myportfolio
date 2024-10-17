import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from '../common/SkillList';
import { useTheme } from '../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section className="flex flex-col mt-20 text-center">
      <h1 className="rubik text-[32px] uppercase text-[var(--text-color)] m-0 p-0 mb-[30px]">Skills</h1>
      <div className="flex justify-evenly self-center flex-wrap gap-10 max-w-[26ch] md:max-w-fit md:gap-7">
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr className='w-[100px] h-[1px] bg-[var(--text-color)] mx-auto my-8 md:w-[300px]' />
      <div className="flex justify-evenly self-center flex-wrap gap-10 max-w-[26ch] md:max-w-fit md:gap-7">
        <SkillList src={checkMarkIcon} skill="UI Design" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Responsive Design" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr className='w-[100px] h-[1px] bg-[var(--text-color)] mx-auto my-8 md:w-[300px]' />
      <div className="flex justify-evenly self-center flex-wrap gap-10 max-w-[26ch] md:max-w-fit md:gap-7">
        <SkillList src={checkMarkIcon} skill="Next.js" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Postgre" />
      </div>
    </section>
  );
}

export default Skills;
