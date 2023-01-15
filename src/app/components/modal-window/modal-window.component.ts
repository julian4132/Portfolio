import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

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
        extraInfo: [data.extraInfo, []],
        imgSrc: [data.imgSrc, []]
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

  onClose(edited:boolean):{edited:boolean, data:PortfolioItemInfo}{
    var data:PortfolioItemInfo = {
      title: this.form.value.title,
      subtitle: this.form.value.subtitle,
      description: this.form.value.description,
      extraInfo: this.form.value.extraInfo,
      imgSrc: this.form.value.imgSrc,
      linkIndex: "",
    }
    return {edited: edited, data: data};
  }


}
