'use strict';
const ArticlesService ={
  getAllArticles(){
   // return knex.select('*').from('blogful_articles');
return Promise.resolve('all the articles!!')
  }



};


module.exports =ArticlesService;