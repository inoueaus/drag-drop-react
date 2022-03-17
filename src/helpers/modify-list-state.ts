const modifyListState = (
  prev: ListModel[],
  listId: string,
  itemId: string,
  copiedItem: ListItemModel
) => {
  const copiedPrev = [...prev];

  copiedPrev.map(listItem => {
    const filteredSubList = listItem.list.filter(item => item.id !== itemId);
    listItem.list = filteredSubList;
    if (listItem.id === listId) {
      listItem.list.push(copiedItem);
    }
    return listItem;
  });

  return copiedPrev;
};

export default modifyListState;
