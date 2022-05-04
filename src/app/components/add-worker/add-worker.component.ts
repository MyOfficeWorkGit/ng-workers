import CardService from 'src/app/services/card-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IWorker } from 'src/app/models/IWorker.interface';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss'],
})
export class AddWorkerComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(public dialog: MatDialog, private cardService: CardService) {}

  ngOnInit(): void {}

  public onSubmit() {
    if (this.form.valid) {
      const formValues = this.form.form.value;

      const newWorker: IWorker = {
        id: formValues.id,
        name: formValues.name,
        jobTitle: formValues.jobTitle,
        story: formValues.story,
        badgeUrl: 'https://picsum.photos/200/300?random=666',
      };

      this.cardService.addWorker(newWorker);
      this.dialog.closeAll();
    }
  }
}
