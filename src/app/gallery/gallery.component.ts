import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  employers:Emp[]=[
    {empPhoto:"../../assets/emp1.jpg",empName:"Hassan Moustafa",empPosition:"CEO"},
    {empPhoto:"../../assets/emp3.jpg",empName:"Muhammed Elhady",empPosition:"Deputy Director"},
    {empPhoto:"../../assets/emp1.jpg",empName:"Shady Radwan",empPosition:"Seals Management"}
  ]
}
interface Emp {
  empPhoto: string;
  empName: string;
  empPosition: string;
}