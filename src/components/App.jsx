import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.table(emojipedia);

const createEntry = (entry) => {
  return <Entry
      key={entry.id}
      id={entry.id}
      name={entry.name}
      emoji={entry.emoji}
      meaning={entry.meaning}
     />;
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((entry) => createEntry(entry))}
      </dl>
    </div>
  );
}

export default App;
