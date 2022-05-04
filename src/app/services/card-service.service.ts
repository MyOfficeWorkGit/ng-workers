import { Injectable } from '@angular/core';
import { IWorker } from '../models/IWorker.interface';

@Injectable({
  providedIn: 'root',
})
export default class CardService {
  workers: IWorker[] = [
    {
      id: 'f64b158e-0766-44f5-b377-ba137d4f7e11',
      name: 'Merrill Mc Coughan',
      jobTitle: 'Software Engineer IV',
      story: 'transform integrated e-markets',
      badgeUrl: 'https://picsum.photos/200/300?random=1',
    },
    {
      id: 'da52cee2-2e7e-4feb-906d-5852288b7cbc',
      name: 'Borden Clayton',
      jobTitle: 'Health Coach IV',
      story: 'grow leading-edge e-business',
      badgeUrl: 'https://picsum.photos/200/300?random=2',
    },
    {
      id: 'e616cd93-ff05-4715-a28f-24566d1f6e8b',
      name: 'Brent Sinnocke',
      jobTitle: 'Environmental Specialist',
      story: 'incubate best-of-breed eyeballs',
      badgeUrl: 'https://picsum.photos/200/300?random=3',
    },
    {
      id: 'edc59ddc-a2bd-4ad4-8c52-254804effe6c',
      name: 'Waylan Lemarie',
      jobTitle: 'Clinical Specialist',
      story: 'synthesize integrated e-services',
      badgeUrl: 'https://picsum.photos/200/300?random=4',
    },
    {
      id: 'e8bf6163-8d47-4441-9b2c-876be9ce2481',
      name: 'Zebadiah Bullon',
      jobTitle: 'Administrative Assistant III',
      story: 'innovate intuitive e-commerce',
      badgeUrl: 'https://picsum.photos/200/300?random=5',
    },
    {
      id: '0141471b-5105-46d5-8dd6-2a77d3fd9b8d',
      name: 'Kellyann Scholz',
      jobTitle: 'Social Worker',
      story: 'orchestrate innovative technologies',
      badgeUrl: 'https://picsum.photos/200/300?random=6',
    },
    {
      id: 'b021f242-8cf5-4fc2-ade2-210686e3afa7',
      name: 'Terry Wisham',
      jobTitle: 'Information Systems Manager',
      story: 'drive efficient e-business',
      badgeUrl: 'https://picsum.photos/200/300?random=7',
    },
  ];
  constructor() {}

  public getAllWorkers(): IWorker[] {
    return this.workers.reverse();
  }
  public addWorker(worker: IWorker) {
    this.workers.push(worker);
  }
  public updateWorker(id: string, worker: IWorker) {
    this.workers.forEach((value, index) => {
      if (value.id == id) this.workers[index] = worker;
    });
  }
  public deleteWorker(id: string) {
    this.workers.forEach((value, index) => {
      if (value.id == id) this.workers.splice(index, 1);
    });
  }
}
