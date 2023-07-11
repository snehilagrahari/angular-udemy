import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string [], filterStr : string): string [] {
    if(value.length === 0 || filterStr.trim() === ""){
      return value
    }
    let filterArr = value.filter((el)=>el===filterStr)
    console.log(filterArr,filterStr);
    return filterArr;
  }

}
