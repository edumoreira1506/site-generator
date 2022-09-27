import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SiteComponent, SiteComponentIdentifier } from '../model';

@Component({
  selector: 'app-edit-component-modal',
  templateUrl: './edit-component-modal.component.html',
  styleUrls: ['./edit-component-modal.component.scss'],
})
export class EditComponentModalComponent implements OnInit {
  @Input() identifier: SiteComponent['identifier'] =
    SiteComponentIdentifier.Banner;
  @Input() metadata: SiteComponent['metadata'] = {};

  @Output() close = new EventEmitter();

  @ViewChild('form') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}
}
