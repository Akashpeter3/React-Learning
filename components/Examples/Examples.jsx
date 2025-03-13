import TabButton from "../../components/TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../../data.js";
export default function () {
  const [selectedTopic, setSelectedTopic] = useState("");
  console.log("Example Component executing");

  //let tabContent = "Please click any button!";
  const handleSelect = (selectedButton) => {
    // tabContent = selectedButton;s
    //selectedButton => 'components','jsx','props','state'
    //console.log(selectedButton);

    setSelectedTopic(selectedButton);
    console.log(selectedTopic);

    //console.log(tabContent);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
