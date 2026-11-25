import { profile, technologies } from "@/data/portfolio";

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
      </main>
    </div>
  );
}
