const fetchSearchByQuery = (req) => async (dispatch) => {
        
    dispatch({ type: 'SEARCH_QUERY', payload: { request: { query: req.query} } } )

    const response = await window.elasticAppSearch(req);
    //dispacth action to search box state
    dispatch({ type: 'SEARCH_QUERY', payload: { request: { query: req.query, page: {current: response.meta.page.current, size: response.meta.page.size} } } });
     
    //call action to dispatch request to search results   
    dispatch({ type: 'SEARCH_BY_QUERY', payload: { results: response.results, meta: response.meta } });
    
    //dispacth action to search facets state
    dispatch({ type: 'FACETS_UPDATES', payload:  { facets: response.facets } });
    
    
};
const fetchQuerySuggestion = () => async (dispatch) => {
    const response = await window.elasticAppSearch(req);  
  
    dispatch({ type: 'TYPE_QUERY', payload: response });
};
