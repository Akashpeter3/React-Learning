import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../../components/CoreConcept/CoreConcept.jsx";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((coreConceptItem) => (
          <CoreConcept key={coreConceptItem.title} {...coreConceptItem} />
        ))}
      </ul>
    </section>
  );
}
