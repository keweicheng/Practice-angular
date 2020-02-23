import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  category: Category[];

  constructor(
    public categoryService: CategoryService,
    public httpServie: HttpService
  ) { }

  ngOnInit(): void {
    this.httpServie.getData().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('finish');
      }
    );
  }

}
