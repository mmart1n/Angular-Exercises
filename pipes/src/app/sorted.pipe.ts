import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'sorted',
  //pure: false
})
export class SortedPipe implements PipeTransform {
  transform(value: any, propName: string) {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
