import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoListService {

    private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: Http) {

    }

    public getTodoList() {
        const url = this.baseUrl;
        return this.http.get(url)
            .map(res => res.json());
    }
}