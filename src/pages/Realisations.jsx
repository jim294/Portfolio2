import Cards from "../components/Cards";
import Projects from "../assets/Json/projects.json";

const Realisations = () => {
  return (
    <>
      <section className="realisation">
          <img src="/images/divers/mes-projets.gif" alt="contact GIF" />
          <img className="giftTravail" src="/images/divers/travail.gif" alt="Travail GIF" />
        <h3>OpenClassrooms</h3>
        <section className="cardsBackground">
          {Projects.Openclassrooms.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageUrl={project.cover}
              link={`/projectcours/${project.id}`}
            />
          ))}
        </section>
        <h3>Réalisations personnelles</h3>
        <section className="cardsBackground">
          {Projects.Perso.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageUrl={project.cover}
              link={`/projectperso/${project.id}`}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default Realisations;
