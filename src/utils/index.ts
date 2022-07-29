// sorting functions
interface Array {
  bought: number;
}

export const sortByFavorite = (array: Array[]) => {
  array.sort((a, b) => a.bought - b.bought);
};
