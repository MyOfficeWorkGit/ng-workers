import CardService from 'src/app/services/card-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { IWorker } from 'src/app/models/IWorker.interface';
import { MatDialog } from '@angular/material/dialog';
import { UpdateWorkerComponent } from '../update-worker/update-worker.component';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss'],
})
export class WorkerCardComponent implements OnInit {
  @Input() worker: IWorker;
  constructor(private cardService: CardService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  updateWorker(id: string) {}
  deleteWorker(id: string) {
    this.cardService.deleteWorker(id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(UpdateWorkerComponent, {
      data: this.worker,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
