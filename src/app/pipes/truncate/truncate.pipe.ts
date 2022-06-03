import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    var availabelCharacters = value.slice(0,length)

    if(value.length > length)
    {
      availabelCharacters += '...'
    }
    return availabelCharacters
  }

}
