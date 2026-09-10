import Reveal from "@/components/Reveal";
import { testimonial } from "@/content/copy";

export default function Testimonial() {
  if (!testimonial.quote) return null;

  return (
    <section className="section section-dark testimonial-section">
      <div className="content-width">
        <Reveal>
          <p className="eyebrow">{testimonial.eyebrow}</p>
          <blockquote>{`“${testimonial.quote}”`}</blockquote>
          <p className="testimonial-credit">{testimonial.credit}</p>
        </Reveal>
      </div>
    </section>
  );
}
