import lingo from '../assets/lingo.png';
import getit from '../assets/getit.png';
import siksya from '../assets/sajilo.png';
import Pokie from '../assets/Pokie.png';
import ProjectCard from '../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="flex flex-col text-center">
      <h1 className="mb-[30px] rubik text-[32px] uppercase text-[var(--text-color)] m-0 p-0">Projects</h1>
      <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-evenly md:px-8">
        <ProjectCard
          src={lingo}
          link="https://github.com/ravenda7/lingo"
          h3="Lingo"
          p="Language Learning app"
        />
        <ProjectCard
          src={getit}
          link="https://github.com/ravenda7/GET-IT"
          h3="Get-IT"
          p="Project Sharing Platform"
        />
        <ProjectCard
          src={siksya}
          link="https://github.com/itkisthub/Arunima"
          h3="Sajilo Sikshya"
          p="Learning platform"
        />
        <ProjectCard
          src={Pokie}
          link="https://github.com/ravenda7/pokemonapi"
          h3="PokieAPI"
          p="Simple app on API handling"
        />
      </div>
    </section>
  );
}

export default Projects;
