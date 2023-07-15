import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { map } from 'rxjs/operators';

@Injectable({ providedIn : 'root'}) 
export class PostService{

    constructor( private http : HttpClient) {}
    
    createPost(postData : {title : string, content : string}){
        return this.http.post('https://ng-se-26b5b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData);
    }
    
    fetchPosts(){
        return this.http.get<{ [key : string] : {title : String, content : string}}>('https://ng-se-26b5b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
        .pipe(map((res)=>{
            let resArr = []
            for(let key in res){
              resArr.push({...res[key],id : key});
            }
            return resArr
          }));
    }

    clearPosts(){
        return this.http.delete('https://ng-se-26b5b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
    }

}