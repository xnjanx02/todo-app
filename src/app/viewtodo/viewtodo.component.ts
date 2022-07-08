import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit {

  constructor(private api:TodoserviceService) { 

         api.viewTodo().subscribe(
          (response)=>{
            this.data=response
          }
         )

  }

  ngOnInit(): void {
  }
  data:any=[  ]

}
