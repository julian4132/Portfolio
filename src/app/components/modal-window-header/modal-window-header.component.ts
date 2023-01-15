import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-window-header',
  templateUrl: './modal-window-header.component.html',
  styleUrls: ['./modal-window-header.component.scss']
})
export class ModalWindowHeaderComponent implements OnInit {

  public form:FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalWindowHeaderComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,
              private formBuilder:FormBuilder) {
                this.form=this.formBuilder.group({
                  fullName: [data.fullName, []],
                  profession: [data.profession, []],
                  aboutText: [data.aboutText, []],
                  profilePicSrc:[data.profilePicSrc, []],
                  bannerSrc:[data.bannerSrc, []],
                })
              }

  ngOnInit(): void {
  }

  onClose(edited:boolean){
    return {edited: edited, data: this.form.value};
  }

}
