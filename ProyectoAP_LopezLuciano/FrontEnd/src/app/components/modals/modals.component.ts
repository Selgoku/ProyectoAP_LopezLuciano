import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {

  @Input() title= '';
  public show=false;


  showModal(){
    this.show = true;
  }

  hideModal(){
    this.show= false;
  }

  refresh(): void { 
    window.location.reload(); 
  }

  ngOnInit(): void {
  }

}
