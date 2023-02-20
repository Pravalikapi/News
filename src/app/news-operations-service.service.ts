import { Injectable } from '@angular/core';
import { News } from './news';
@Injectable({
  providedIn: 'root'
})
export class NewsOperationsServiceService {
  constructor() { 
    let news1:News=new News('Stock Market Rises','BusinessNews','Stock prices are determined in the marketplace, where seller supply meets buyer demand. But have you ever wondered about what drives the stock market—that is, what factors affect a stock.','bn1.jpg')
    let news2:News=new News('Stock Market of Indigo','BusinessNews','the stock market ends with loss today','bn2.jpg')
    let news3:News=new News('AP CM fases Some issues','Politics','"Once the steel plant is set up, there will be an ecosystem developed with several ancillary units. Once the ecosystem is created, then the entire area would be transformed into a Steel City," Jagan said after laying the foundation stone.','pn.jpg')
    let news4:News=new News('The Murder in Delhi','Crime','A 30 years person was murdered by some people for money','cn.jpg')
    let news5:News=new News('Sri Lnaka faces crises','World','Sri lanka facing many crises','wn.jpg')
    let news6:News=new News('New AI Technology','Technology','The new technology was launched into market AI','tn.jpg')
    let news7:News=new News('Messi Shows His Worth','Sports','Leo ,Barca furious over contract - leak','sn.jpg')
    
    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
    this.newsArr.push(news7)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {
    
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }
    
    return outputNews;
  }
}

  
