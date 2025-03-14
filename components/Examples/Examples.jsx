import TabButton from "../Tabs/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
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
    <Section title="Examples" id="examples">
      <Tabs
        // ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
