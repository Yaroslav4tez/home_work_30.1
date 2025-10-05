export const setLoading = (isLoading) => ({
  type: "SET_LOADING",
  payload: isLoading,
});

export const setList = (list) => ({
  type: "SET_LIST",
  payload: list,
});

export const clearList = () => ({
  type: "CLEAR_LIST",
});

export const fetchSwapiData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("https://swapi.py4e.com/api/people/1");
      const data = await response.json();
      dispatch(setList(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
