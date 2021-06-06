import { ViewChild,Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Student } from '../../../interfaces/student';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {
  students_list: Student[] = [
    {first_name : "student 1", last_name:"1 student"},
    {first_name : "student 2", last_name:"2 student"},
    {first_name : "student 3", last_name:"3 student"},
    {first_name : "student 4", last_name:"4 student"}
  ];
  

  displayedColumns: string[] = ['level', 'first name', 'last name', 'symbol'];
  dataSource = new MatTableDataSource(this.students_list);

  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


}
