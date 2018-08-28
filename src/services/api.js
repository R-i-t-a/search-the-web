export default {
  getHeadlines(searchTerm = '') {
    
    return fetch(`
    https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(searchTerm)}&apiKey=fe25b34b52dc4df8a64c621d15a42ba6`)
      .then(response => response.json());
  }
};