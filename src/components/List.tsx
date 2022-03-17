import React, { DragEventHandler } from "react";
import AddItem from "./AddItem";

const List: React.FC<{
  listItem: { id: string; list: { id: string; text: string }[] };
  handleDragEvent: (listId: string, itemId: string) => void;
  handleAddItem: (listId: string, text: string) => void;
}> = ({ listItem, handleDragEvent, handleAddItem }) => {
  const handleDrop: DragEventHandler = event => {
    event.preventDefault();
    if (event.target instanceof HTMLUListElement) {
      handleDragEvent(
        event.target.id,
        event.dataTransfer.getData("text/plain")
      );
    }
  };

  const addItemWithListId = (text: string) => handleAddItem(listItem.id, text);

  return (
    <ul
      onDrop={handleDrop}
      onDragEnter={event => event.preventDefault()}
      onDragOver={event => event.preventDefault()}
      id={listItem.id}
    >
      <li>
        <AddItem handleAddItem={addItemWithListId} />
      </li>
      {listItem.list.map(item => (
        <li
          onDragStart={event =>
            event.dataTransfer.setData("text/plain", item.id)
          }
          onDragOver={event => event.stopPropagation()}
          draggable
          key={item.id}
          id={item.id}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default List;
