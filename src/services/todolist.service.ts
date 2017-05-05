import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoListService {

    private getTachesUrl: string = 'http://localhost/todolist_api/get_taches.php';
    private updateTacheUrl: string = 'http://localhost/todolist_api/update_tache.php';

    constructor(private http: Http) {

    }

    getTodoList() {
        return this.http.get(this.getTachesUrl)
            .map(res => res.json());
    }

    updateTache(item){
        let json = JSON.stringify(item);
        return this.http.post(this.updateTacheUrl,json);
    }

}