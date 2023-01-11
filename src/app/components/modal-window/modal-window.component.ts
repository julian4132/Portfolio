import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  public form:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private formBuilder:FormBuilder) {
      this.form = this.formBuilder.group({
        title: [data.title, []],
        subtitle: [data.subtitle, []],
        description: [data.description, []],
        extraInfo: [data.extraInfo, []]
      });
    }

  ngOnInit(): void {
  }

  closeWindow():void{
    this.dialogRef.close(this.form.value);
  }

  onSubmit(event:Event){
    event.preventDefault();
    console.log(this.form.value);
    //this.data=this.form.value;
  }
}
