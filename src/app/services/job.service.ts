import { Injectable } from '@angular/core';
import { IJob } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
   jobData: IJob[] = [
    {    
      
      jobId:1,
      jobCode:"Pesco-25",
      department:"Pesco Jobs 2020",
      jobTitle:"Line Man",
      salary:"20000 - 25000",
      jobType: "Flll-Time"
    },
  
  ];
  constructor() { }

  getAllJobs():IJob[]{
    return this.jobData;
  }
}
