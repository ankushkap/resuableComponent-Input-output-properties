import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() { }

  getCourse(){
    const courselst= [
      {"id": 1, "course": "english"},
      {"id": 2, "course": "math"},
      {"id": 3, "course": "physics"},
      {"id": 4, "course": "social"}
    ]

    return courselst;  
  }
}
