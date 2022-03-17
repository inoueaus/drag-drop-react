import { useState } from "react";
import "./App.css";
import List from "./components/List";
import copyListItem from "./helpers/copy-list-item";
import modifyListState from "./helpers/modify-list-state";

function App() {
  const [lists, setLists] = useState<ListModel[]>([
    {
      id: "listA",
      list: [
        { id: "a1", text: "らふてー" },
        { id: "a2", text: "てぃびち" },
      ],
    },
    {
      id: "listB",
      list: [
        { id: "b1", text: "うさんみ" },
        { id: "b2", text: "すば" },
      ],
    },
  ]);

  const handleDropEvent = (listId: string, itemId: string) => {
    const copiedItem = copyListItem(lists, itemId);
    // delete and add
    if (!copiedItem) {
      throw Error("Item not in any List");
    }

    setLists(prev => modifyListState(prev, listId, itemId, copiedItem));
  };

  return (
    <div className="App">
      {lists.map(listItem => (
        <List
          key={listItem.id}
          listItem={listItem}
          handleDragEvent={handleDropEvent}
        />
      ))}
    </div>
  );
}

export default App;
