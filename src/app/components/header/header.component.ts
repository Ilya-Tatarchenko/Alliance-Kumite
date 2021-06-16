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

  burgerMenu(){
    const burger = document.getElementById('burger');
    const btn = document.getElementById('burger_btn');

    if(burger!.style.display = 'none')
    {
      this.renderer.setStyle(burger, 'display', 'block');
      this.renderer.addClass(btn, 'opened');
    }
    else if(btn!.classList.contains('opened'))
    {
      this.renderer.setStyle(burger, 'display', 'none');
      this.renderer.removeClass(btn, 'opened');
    }
  }

}
