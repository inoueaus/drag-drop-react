import React, { useRef } from "react";

const AddItem: React.FC<{ handleAddItem: (text: string) => void }> = ({
  handleAddItem,
}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (textInputRef.current!.value) {
      handleAddItem(textInputRef.current!.value);
    }
  };
  return (
    <div className="innerCard">
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" ref={textInputRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
