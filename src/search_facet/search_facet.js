(function(){
    var searchFacets = {        
        init: function() {   
          this.cacheDom();
          this.bindEvents();
          this.render();
          // window.searchStore.subscribe(this.render())
        },
        cacheDom: function() {
          this.filters = { all: [] }
          this.$facetGroup = document.querySelector('.search_facet .js-filter-options');
          this.$facetItemInput = document.querySelector('.search_facet .filter-option .checkbox.js-checkbox');
          this.$clearFilter = document.querySelector('.search_facet .clear-filter .link');
          // this.$ul = this.$el.find('ul');
          // this.template = this.$el.find('#search_box_template').html();
        },
        bindEvents: function() {
          this.$facetGroup.addEventListener('click', (event) => {
            event.target.classList.toggle('selected')
            const filter_key = event.target.parentNode ? 
                             event.target.parentNode.getAttribute('data-parent') : ""
            const filter_value = event.target.parentNode ? 
                              event.target.parentNode.querySelector('.filter-option__text').innerText : ""
            let cacheKey =  'search_filter_cache_key'
            var currentFilter = {}
            // Generate Hascode from request object
            let hashCode = `${JSON.stringify(window.searchStore.getState().search_facets).hashCode()}:${JSON.stringify(window.searchStore.getState().search_request).hashCode()}`
     
            if(event.target.classList.contains('js-checkbox') && event.target.classList.contains('selected')) {
              currentFilter[filter_key] = filter_value
              this.filters.all.push(currentFilter)
              cacheKey = `${cacheKey}${hashCode}:add:${filter_key}:${filter_value}`
            } else {
              currentFilter[filter_key] = filter_value
              let pos = this.filters.all.indexOf(currentFilter)
              this.filters.all = this.filters.all.filter(el => { if (el[filter_key] !== filter_value) return el })
              cacheKey = `${cacheKey}${hashCode}:remove:${filter_key}:${filter_value}`
            }
            
            // Dipatch action for search filter
            window.searchStore.dispatch(selectFilter({selectedfilters: this.filters, type: "search", cacheKey }))
          });
          this.$clearFilter.addEventListener('click', (event) => { 

          });
        },
        render: function() {
          var data = {
            searchSuggestions: this.searchSuggestions,
          };
          // var compiledTemplate = window.Handlebars.compile(this.template);
          // this.$ul.html(compiledTemplate(data))
        },       
        displaySearchSuggestions: function() {
          // call method for displaying search results
  
          // call method to render the results
          this.render();
        }
  
    }
    searchFacets.init();

  })()