import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
@Input() isbold: boolean;
@Output() change= new EventEmitter();

public courses=[];
  constructor(private  _courselist: CourseListService) { }

  ngOnInit() {
    this.courses =this._courselist.getCourse();
  }

  clickme(val) {
      alert(val);
      this.isbold= !this.isbold;
      this.change.emit(val);
  }

}
