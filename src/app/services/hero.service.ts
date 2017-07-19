import { Injectable }    from '@angular/core';
import { Hero } from "app/logic/hero";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroUrl: string = 'http://localhost:3000/heros';

    constructor(private http: Http) { }

    public getHeroes(): Promise<Hero[]> {

        return this.http.get(this.heroUrl)
        .toPromise()
        .then(response => { 
            console.log(response.json());
            return response.json() as Hero[]; 
        })
        .catch(this.handleError);
    }

    public getHeroById(heroId: number): Promise<Hero> {
        return this.http.get(`${this.heroUrl}/${heroId}`)
        .toPromise()
        .then(response => response.json() as Hero)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}