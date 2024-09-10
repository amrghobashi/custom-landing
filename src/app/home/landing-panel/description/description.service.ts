import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor() { }

  getDescription() {
    return [
      { desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!' },
    ]
  }

  getDescriptionData() {
    return Promise.resolve(this.getDescription().slice(0, 5));
  }
}
