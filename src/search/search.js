(function(ctx) {

    function ElasticAppSearchAPI() {    
        this.getResult = async (req) => {
          console.log("Calling ElasticAppSearch API..")
          // call ElasticApp search with request object
          switch(req.type)
          {
            case "search":
              var res = await fetchSearchResult(req)
              return res
            case "query_suggestion":
              return { type: "query_suggestion", result: "list" }
            case "multi_search":
              return { type: "multi_search", result: "list" }
            case "analytics":
              return { type: "analytics", result: "list" }
            default:
              return { type: "search", result: "list" }
          }
        }
    }
    function ElasticAppSearchProxy() {
        this.api = new ElasticAppSearchAPI()
        this.cache = {}    
        this.getResult = async (req) =>
        {
          let cacheKey = req.cacheKey
          if (this.cache[cacheKey] == null)
          {
            this.cache[cacheKey] = await this.api.getResult(req)
          }
          return this.cache[cacheKey]
        }
    }
    const proxy = new ElasticAppSearchProxy()

    const elasticAppSearchCall = async (req) => {    
        return await proxy.getResult(req)
    }
    
    ctx.elasticAppSearch = elasticAppSearchCall

})(window)


const fetchSearchResult = async (req) => {
  const auth = "Bearer search-peqgjmmkr1fa2e8sfoqbo81q"
  const url = "https://86a151ba69574659a8968ebcb28e318c.ent-search.us-east-1.aws.cloud.es.io/api/as/v1/engines/joule-bt-corp-honeywellbt-prod/search"
  
  let search_request = JSON.parse(JSON.stringify(window.searchStore.getState().search_request.request))
  let searchSelectedFilters = window.searchStore.getState().search_facets.selectedfilters  
  if(searchSelectedFilters) {
    console.log(JSON.stringify(search_request.filters))
    search_request.filters.all = search_request.filters.all.concat(searchSelectedFilters.all)
  } 
  console.log(`Request ${JSON.stringify(search_request)}`)
  const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      },
      body: JSON.stringify(search_request)
  })
  const responseData = await response.json()
  console.log(responseData)
  return responseData

}

