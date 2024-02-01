import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  products:Product[]=[
    {img:"../../assets/product.jpeg",title:"Iphone 15 pro max",description:"Smart Phone from Apple",price:95000},
    {img:"../../assets/product2.png",title:"Iphone 15 pro",description:"Smart Phone from Apple",price:88000},
    {img:"../../assets/product3.jpeg",title:"Iphone 13",description:"Smart Phone from Apple",price:45000},
    {img:"../../assets/product.jpeg",title:"Iphone 15 pro max",description:"Smart Phone from Apple",price:95000},
    {img:"../../assets/product2.png",title:"Iphone 15 pro",description:"Smart Phone from Apple",price:88000},
    {img:"../../assets/product3.jpeg",title:"Iphone 13",description:"Smart Phone from Apple",price:45000},
    {img:"../../assets/product.jpeg",title:"Iphone 15 pro max",description:"Smart Phone from Apple",price:95000},
    {img:"../../assets/product2.png",title:"Iphone 15 pro",description:"Smart Phone from Apple",price:88000},
    {img:"../../assets/product3.jpeg",title:"Iphone 13",description:"Smart Phone from Apple",price:45000},
    {img:"../../assets/product.jpeg",title:"Iphone 15 pro max",description:"Smart Phone from Apple",price:95000},
    {img:"../../assets/product2.png",title:"Iphone 15 pro",description:"Smart Phone from Apple",price:88000},
    {img:"../../assets/product3.jpeg",title:"Iphone 13",description:"Smart Phone from Apple",price:45000},
    {img:"../../assets/product.jpeg",title:"Iphone 15 pro max",description:"Smart Phone from Apple",price:95000},
    {img:"../../assets/product2.png",title:"Iphone 15 pro",description:"Smart Phone from Apple",price:88000},
    {img:"../../assets/product3.jpeg",title:"Iphone 13",description:"Smart Phone from Apple",price:45000},
    {img:"../../assets/product.jpeg",title:"Iphone 15 pro max",description:"Smart Phone from Apple",price:95000},
    {img:"../../assets/product2.png",title:"Iphone 15 pro",description:"Smart Phone from Apple",price:88000},
    {img:"../../assets/product3.jpeg",title:"Iphone 13",description:"Smart Phone from Apple",price:45000},
    {img:"../../assets/product.jpeg",title:"Iphone 15 pro max",description:"Smart Phone from Apple",price:95000},
    {img:"../../assets/product2.png",title:"Iphone 15 pro",description:"Smart Phone from Apple",price:88000}
  ]
}
interface Product {
  img: string,
  title: string,
  description: string,
  price: number,
}