import React, { DragEventHandler } from "react";

const List: React.FC<{
  listItem: { id: string; list: { id: string; text: string }[] };
  handleDragEvent: (listId: string, itemId: string) => void;
}> = ({ listItem, handleDragEvent }) => {
  const handleDrop: DragEventHandler = event => {
    event.preventDefault();
    if (event.target instanceof HTMLUListElement) {
      handleDragEvent(
        event.target.id,
        event.dataTransfer.getData("text/plain")
      );
    }
  };

  return (
    <ul
      onDrop={handleDrop}
      onDragEnter={event => event.preventDefault()}
      onDragOver={event => event.preventDefault()}
      id={listItem.id}
    >
      {listItem.list.map(item => (
        <li
          onDragStart={event =>
            event.dataTransfer.setData("text/plain", item.id)
          }
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
