import { useState } from "react";
import "./App.css";
import List from "./components/List";
import copyListItem from "./helpers/copy-list-item";

function App() {
  const [lists, setLists] = useState([
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

    setLists(prev => {
      const copiedPrev = [...prev];

      copiedPrev.map(listItem => {
        const filteredSubList = listItem.list.filter(
          item => item.id !== itemId
        );
        listItem.list = filteredSubList;
        if (listItem.id === listId) {
          listItem.list.push(copiedItem);
        }
        return listItem;
      });

      return copiedPrev;
    });
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
