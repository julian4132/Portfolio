import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FetchLinksDataService } from 'src/app/services/fetch-links-data.service';
import { LocalFetchDataServiceService } from 'src/app/services/local-fetch-data-service.service';

@Component({
  selector: 'app-modal-window-links',
  templateUrl: './modal-window-links.component.html',
  styleUrls: ['./modal-window-links.component.scss']
})
export class ModalWindowLinksComponent implements OnInit {

  links:any;

  constructor(public dialogRef: MatDialogRef<ModalWindowLinksComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fetchLinksService:FetchLinksDataService,
    private localFetchLinksService:LocalFetchDataServiceService) { }

  ngOnInit(): void {
    /*this.fetchLinksService.fetchLinks(this.data).subscribe(data => {
      this.links=data;
      console.log("Esta vez recibí");
      console.log(data);
    });*/
    this.links=this.localFetchLinksService.fetchLinks(this.data);
    console.log(this.links)
  }

  

}
