import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  moduleId    : module.id,
  selector    : 'form-change-weight',
  templateUrl : 'form-change-weight.component.html'
})

export class FormChangeWeightComponent {
  @Input() changeIn: any;
  @Output() changeWeight: EventEmitter<any> = new EventEmitter();
  newValue : number;

  submitForm(form: any) {

    if (!form.newValue) {
      return;
    }

    this.changeIn.setWeight(form.newValue);
    this.changeWeight.emit();
  }

}
