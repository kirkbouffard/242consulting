import Reveal from "@/components/Reveal";
import { testimonial } from "@/content/copy";

export default function Testimonial() {
  // Slot and styling stay put; the gate is the named attribution.
  if (!testimonial.showTestimonial || !testimonial.quote) return null;

  return (
    <Reveal className="testimonial">
      <p className="eyebrow">{testimonial.eyebrow}</p>
      <blockquote>{`“${testimonial.quote}”`}</blockquote>
      <p className="testimonial-credit">{testimonial.credit}</p>
    </Reveal>
  );
}
