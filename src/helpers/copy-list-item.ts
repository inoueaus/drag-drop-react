const copyListItem = (
  lists: {
    id: string;
    list: {
      id: string;
      text: string;
    }[];
  }[],
  targetItemId: string
) => {
  // copy li
  const flattenedList = lists.reduce<
    {
      id: string;
      text: string;
    }[]
  >((prev, currentListObj) => [...prev, ...currentListObj.list], []);

  const copiedItem = flattenedList.find(item => item.id === targetItemId);

  return copiedItem;
};

export default copyListItem;
