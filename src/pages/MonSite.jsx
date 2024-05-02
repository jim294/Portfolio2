import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Projects from "../assets/Json/projects.json";
import Preloader from "../components/Preloader.jsx";

const MonSite = () => {
  const [work, setWork] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const MonSite = Projects.MonSite.find((project) => project.id === id);

  useEffect(() => {
    if (MonSite) {
      setWork(MonSite);
    } else {
      navigate("/Error");
    }
  }, [MonSite, navigate]);

  return work == null ? (
    <Preloader />
  ) : (
    <>
      <section className="project">
        <section className="project__left">
          <h1 className="project__title">{MonSite.title}</h1>
          <p className="project__location">{MonSite.site}</p>
          <Carousel
            images={MonSite.pictures}
            pagination={MonSite.pictures.length}
          />
          <ul>
            {MonSite.tags.map((tag) => (
              <li className="project__tags" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </section>
        <section className="project__right">
          <figure>
            <figcaption className="project__photo-nom">
              Difficulté du projet
            </figcaption>
          </figure>
          <Stars
            numberActiveStars={MonSite.rating}
            numberInactiveStars={5 - MonSite.rating}
          />
        </section>
      </section>

      <section className="collapse__project">
        <Collapse
          key={Math.random()}
          title="Description"
          description={MonSite.description}
        />
        <Collapse
          key={Math.random()}
          title="Liens"
          description={
            <ul className="collapseLiens">
              <li>
                <h2>
                  <a
                    href={MonSite.lien1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mon site
                  </a>
                </h2>
              </li>
            </ul>
          }
        />
      </section>
    </>
  );
};

export default MonSite;
