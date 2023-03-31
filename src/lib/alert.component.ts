import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { TcView, View, view } from '@ngx-tc/base';

@Component({
  selector: 'tc-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements TcView {
  @HostBinding('class') get class() {
    return 'tc-alert';
  };
  @HostBinding('class.outline') get getOutline() { return this.outline }
  @HostBinding('class.with-before-icon') @Input() beforeIcon: string;
  @HostBinding('class.with-after-icon') @Input() afterIcon: string;
  @HostBinding('class.alert-primary') get typePrimary() { return this.tcView === view.primary};
  @HostBinding('class.alert-accent') get typeAccent() { return this.tcView === view.accent};
  @HostBinding('class.alert-success') get typeSuccess() { return this.tcView === view.success};
  @HostBinding('class.alert-info') get typeInfo() { return this.tcView === view.info};
  @HostBinding('class.alert-warning') get typeWarning() { return this.tcView === view.warning};
  @HostBinding('class.alert-error') get typeError() { return this.tcView === view.error};

  @Input('view') tcView: View = view.primary;
  @Input() title: string;
  @Input() removable: boolean;
  @Input() outline: boolean;

  constructor(private element: ElementRef) {}

  removeAlert() {
    this.element.nativeElement.remove();
  }
}
