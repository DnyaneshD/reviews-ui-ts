export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

export function fetchItemsData(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(items => {
        dispatch(itemsFetchDataSuccess(items));
      });
  };
}
