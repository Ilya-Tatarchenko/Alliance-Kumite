import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  } 
  
  openMenu(){
    const burger = document.getElementById('burger');
    const btnOpen = document.getElementById('open');
    const btnClose = document.getElementById('close');

    this.renderer.setStyle(burger, 'bottom', 'calc(0% - 70px)');
    this.renderer.setStyle(btnOpen, 'display', 'none');
    this.renderer.setStyle(btnClose, 'display', 'block');
  }

  closeMenu(){
    const burger = document.getElementById('burger');
    const btnOpen = document.getElementById('open');
    const btnClose = document.getElementById('close');

    this.renderer.setStyle(burger, 'bottom', '100%');
    this.renderer.setStyle(btnOpen, 'display', 'block');
    this.renderer.setStyle(btnClose, 'display', 'none');
  }

}
