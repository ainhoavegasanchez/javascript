export class Product {
  title;
  url;
  thumbnail;
  score;
  price;
  review;
  constructor(title, url, thumbnail, score, price, review) {
    this.title = title;
    this.url = url;
    this.thumbnail = thumbnail;
    this.score = score;
    this.price = price;
    this.review = review;
  }
}
