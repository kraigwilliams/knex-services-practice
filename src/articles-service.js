
const ArticlesService ={
  getAllArticles(knex){
    return knex.select('*').from('blogful_articles');
//return Promise.resolve('all the articles')
  },

insertArticle(){
  return Promise.resolve({})
}

};


module.exports =ArticlesService;