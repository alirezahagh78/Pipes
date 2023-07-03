import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(mile: number, unitTarget :  string): any {
    if(!mile){
      return ;;
    }
    switch (unitTarget){
      case 'km':
        return mile * 1.6;
      case 'm':
        return mile * 1.6 * 1000;
      case 'cm':
        return mile * 1.6 * 1000 * 1000;
    }
  }

}
