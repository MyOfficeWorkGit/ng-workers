import CardService from 'src/app/services/card-service.service';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWorker } from 'src/app/models/IWorker.interface';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.scss'],
})
export class UpdateWorkerComponent{
  @ViewChild('f') form: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public worker: IWorker,
    public dialog: MatDialog,
    private cardService: CardService
  ) {}


  }

