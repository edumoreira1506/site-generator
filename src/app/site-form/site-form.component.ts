import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Site } from '../model';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss'],
})
export class SiteFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  site!: Site;

  constructor() {}

  ngOnInit(): void {
    this.site = new Site('');
  }

  onSubmit() {
    this.form.reset();
  }
}
