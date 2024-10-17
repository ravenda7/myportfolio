function SkillList({ src, skill }) {
  return (
    <span className="flex text-center gap-[5px]">
      <img src={src}
      className="w-[20px]" alt="Checkmark icon" />
      <p className="max-w-[24ch] monos text-[16px] font-medium uppercase text-[var(--text-color)] m-0 p-0">{skill}</p>
    </span>
  );
}

export default SkillList;
