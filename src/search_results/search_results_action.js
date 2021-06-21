const fetchSearchResultsByQuery = (req) => async (dispatch) => {
    const response = await window.elasticAppSearch(req);    
    console.log(response)
    dispatch({ type: 'SEARCH_BY_QUERY', payload: response.results });
};
const fetchFilteredSearchResults = (req) => async (dispatch) => {
    const response = await window.elasticAppSearch(req);    
  
    dispatch({ type: 'CLICK_TAG', payload: response });
};