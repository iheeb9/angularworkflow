import { Component, Input, OnInit } from '@angular/core';
import { demandeModel } from 'shared/models/demandeModel';

@Component({
  selector: 'app-shared-detail-component',
  templateUrl: './shared-detail-component.component.html',
  styleUrls: ['./shared-detail-component.component.css']
})
export class SharedDetailComponentComponent implements OnInit {

  constructor() { }
@Input() demande: demandeModel
  ngOnInit(): void {
  }

}
