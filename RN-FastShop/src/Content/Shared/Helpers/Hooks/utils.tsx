import {ListType} from '~/Redux/Types/ListsTypes';

export const useOrderProducts = (lists: Array<ListType>) => {
  let finalProducts = [];
  for (let i = 0; i < lists.length; i++) {
    finalProducts.push(
      ...lists[i].res.map((el) => ({
        ...el,
        shopData: lists[i].shopData,
      })),
    );
  }
  return finalProducts;
};
