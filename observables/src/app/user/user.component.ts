import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number = 0;
  observerId : Subscription;

  constructor(private route: ActivatedRoute) {
    let count : number = 0;
     const intervalObservable = Observable.create((observer : Observer<number>)=>{
      let timerId = setInterval(()=>{
        observer.next(count);
        count++;
        if(count===13){
          clearInterval(timerId);
          observer.complete();
        }
      },1000)
     })
     this.observerId = intervalObservable.subscribe((count : number)=>{
      console.log(count);
     }, (error : Error) =>{
      console.log(error)
     }, () => {
      console.log('Completed!');
     })
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy(): void {
    this.observerId.unsubscribe()
  }
}
