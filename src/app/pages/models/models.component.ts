import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {
  
    constructor(private api:ApiService){}
    products:any=""
    ngOnInit(){this.api.getProducts().subscribe((data:any)=>{this.products=data})
    }
    




}
