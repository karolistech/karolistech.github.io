import { experiments, profile, projects, technologies } from "@/data/portfolio";

import "./App.css";
import icons from "@/assets/icons/icons.svg";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={profile.photo} alt={profile.name} className="header__photo" />

        <h1 className="header__name">{profile.name}</h1>

        <span className="header__title">{profile.title}</span>

        <nav className="socials">
          {profile.socials.map(social => (
            <a key={social.name} href={social.href} className="social__link" target="_blank">
              <svg className="social__icon">
                <use href={`${icons}#${social.icon}`} />
              </svg>
            </a>
          ))}
        </nav>
      </header>

      <main className="main">
        <section className="section">
          <h2 className="section__title">Technologies</h2>

          <ul className="technologies">
            {technologies.map(technology => (
              <li key={technology.name} className="technology">
                <svg className="technology__icon">
                  <use href={`${icons}#${technology.icon}`} />
                </svg>

                <span className="technology__name">{technology.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">Personal Projects</h2>

          <ul className="projects">
            {projects.map(project => (
              <li key={project.name} className="project">
                <img src={project.image} alt={project.name} className="project__image" />

                <div className="project__body">
                  <div className="project__header">
                    <h3 className="project__name">{project.name}</h3>

                    <div className="project__links">
                      <a href={project.github} className="project__link" target="_blank">
                        <svg className="project__icon">
                          <use href={`${icons}#github`} />
                        </svg>
                      </a>

                      <a href={project.demo} className="project__link" target="_blank">
                        <svg className="project__icon">
                          <use href={`${icons}#external-link`} />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <p className="project__description">{project.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">Other Experiments</h2>

          <ul className="experiments">
            {experiments.map(experiment => (
              <li key={experiment.name} className="experiment">
                <a href={experiment.demo} className="experiment__link" target="_blank">
                  {experiment.name}
                </a>

                <p className="experiment__description">{experiment.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
