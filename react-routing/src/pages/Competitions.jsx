import competitions from "../assets/data/data.json";

import { Link } from "react-router-dom";

function Competitions() {
  return (
    <section>
      {competitions.map((competition) => {
        return (
          <article key={competition.id}>
            <Link to={`/competitions/${competition.id}`}>
              <h3>{competition.name}</h3>
            </Link>
            <p>Year: {competition.year}</p>
          </article>
        );
      })}
    </section>
  );
}

export default Competitions;
