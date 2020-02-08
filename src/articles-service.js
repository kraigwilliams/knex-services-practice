'use strict';
const ArticlesService ={
  getAllArticles(knex){
    return knex.select('*').from('blogful_articles');
//return Promise.resolve('all the articles')
  }



};


module.exports =ArticlesService;