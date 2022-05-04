import { Component, OnInit } from '@angular/core';
import CardService from 'src/app/services/card-service.service';

@Component({
  selector: 'app-worker-card-list',
  templateUrl: './worker-card-list.component.html',
  styleUrls: ['./worker-card-list.component.scss'],
})
export class WorkerCardListComponent implements OnInit {
  constructor(public cardService: CardService) {}

  ngOnInit(): void {}
}
