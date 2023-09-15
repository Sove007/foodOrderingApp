export function handleSearch(searchtext, restaurant) {
  const filterData = restaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
  );
  return filterData;
}
