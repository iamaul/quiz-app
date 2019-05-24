import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {

  constructor(private title : Title) { }

  ngOnInit(): void {
    this.title.setTitle('Page Error - 404');
  }

}
