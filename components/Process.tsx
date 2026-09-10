import Reveal from "@/components/Reveal";
import { process } from "@/content/copy";

export default function Process() {
  return (
    <section id={process.id} className="section section-dark">
      <div className="content-width">
        <Reveal className="work-intro">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2>{process.heading}</h2>
          <p>{process.intro}</p>
        </Reveal>
        <div className="process-grid">
          {process.steps.map((step) => (
            <Reveal className="process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
