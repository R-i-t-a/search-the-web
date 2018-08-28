<template>
    <section class="headlines">
        <h2>Headlines</h2>

        <HeadlinesSearch :onSearch="handleSearch"/>

        <Loader :loading="loading"/>
        
        <pre v-show="error" class="error">
            {{error}}
        </pre>

        <p v-if="search">Searching for &quot;{{ search }}&quot;</p>
        <div class="search-container">
          <ul v-if="headlines">
            <Headline v-for="headline in headlines"
              :key="headline.title"
              :headline="headline"
              />
          </ul>
        </div>
    </section>
</template>

<script>
import api from '../../services/api.js';
import Headline from './Headline.vue';
import HeadlinesSearch from './HeadlinesSearch.vue';
import Loader from './Loader.vue';

export default {
  data() {
    return {
      headlines: null,
      loading: false,
      error: null,
      search: '',
      total: 0
    };
  },

  components: {
    Headline,
    HeadlinesSearch,
    Loader
  },

  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchHeadlines();
    },
    searchHeadlines(){
      this.loading = true;
      this.error = null;

      api.getHeadlines(this.search)
        .then(response => {
          this.headlines = response.articles;
          this.total = response.totalResults;
          this.loading = false;
          console.log('response', response);
          console.log('this.headlines:', this.headlines);
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
          console.log('error', this.error);
        });
    }
  }

};
</script>

<style>
.error {
  color: red;
}

ul {
  list-style-type: none;
  text-align: left;
  padding: 5%;
}

li {
  padding: 5%;
}

.nav-item {
  padding: 15px;
}
</style>


