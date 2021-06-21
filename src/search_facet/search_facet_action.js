const selectFilter = (req) => async (dispatch) => {
    
    // dipatch action to update the selected filters
    dispatch({ type: 'SELECT_FILTER', payload: { selectedfilters: req.selectedfilters } });
      
    // Call Search API
    const response = await window.elasticAppSearch(req);  
     
    //call action to dispatch request to search results  
    dispatch({ type: 'SEARCH_BY_QUERY', payload: { results: response.results, meta: response.meta } });
    //dispacth action to search facets state
    dispatch({ type: 'FACETS_UPDATES', payload:  { facets: response.facets } });
   
};

const clearFilter = () => async (dispatch) => {
    dispatch({ type: 'CLEAR_FILTER', payload: response.data });
};

const clearAllFilter = () => async (dispatch) => {   
    dispatch({ type: 'CLEAR_ALL_FILTER', payload: response.data });
};
const resetFilters = () => async (dispatch) => {
    dispatch({ type: 'RESET_FILTERS', payload: { filters: {} } });
};