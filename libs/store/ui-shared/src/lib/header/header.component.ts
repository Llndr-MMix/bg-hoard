import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-hoard-header',
  template: `
    <mat-toolbar color="primary">
      {{ title }}
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title = '';
}
