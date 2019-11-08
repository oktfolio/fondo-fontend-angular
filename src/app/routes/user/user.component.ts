import {HttpClient, HttpParams} from '@angular/common/http';
import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

interface ItemData {
  id: number;
  username: string;
  realName: string;
  mobile: number;
  createAt: string;
  updateAt: string;
  createBy: number;
  updateBy: number;
  gender: string;
  avatar: string;
  status: number;
}

interface Result {
  total: number;
  list: ItemData[];
}

@Injectable()
export class RandomUserService {
  url = 'http://localhost:8080/users';

  getUsers(
    pageIndex: number = 1,
    pageSize: number = 10,
    // sortField: string,
    // sortOrder: string,
    // genders: string[]
  ): Observable<Result> {
    const params = new HttpParams()
      .append('pageNum', `${pageIndex}`)
      .append('pageSize', `${pageSize}`);
    // .append('results', `${results}`)
    // .append('sortField', sortField);
    // .append('sortOrder', sortOrder);
    // genders.forEach(gender => {
    //   params = params.append('gender', gender);
    // });
    return this.http.get<Result>(`${this.url}`, {
      params
    });
  }

  constructor(private http: HttpClient) {
  }
}

@Component({
  selector: 'app-user',
  providers: [RandomUserService],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData: ItemData[] = [];
  loading = true;
  sortValue: string | null = null;
  sortKey: string | null = null;
  filterGender = [{text: 'male', value: 'M'}, {text: 'female', value: 'F'}];
  searchGenderList: string[] = [];

  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  constructor(private randomUserService: RandomUserService) {
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.randomUserService
      .getUsers(this.pageIndex, this.pageSize, /*this.sortKey!, this.sortValue!, this.searchGenderList*/)
      .subscribe((data: Result) => {
        this.loading = false;
        this.total = data.total;
        this.listOfData = data.list;
      });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

  ngOnInit(): void {
    this.searchData();
  }
}
