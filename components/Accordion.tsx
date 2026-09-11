"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

// One panel open at a time. The trigger is a real button, so Enter, Space and
// tab order come from the platform rather than hand rolled key handling.
export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const expanded = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;

        return (
          <div className="accordion-item" key={item.q}>
            <h4 className="accordion-heading">
              <button
                type="button"
                id={buttonId}
                className="accordion-trigger"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
              >
                {item.q}
              </button>
            </h4>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              hidden={!expanded}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
