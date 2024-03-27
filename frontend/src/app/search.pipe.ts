import { Pipe, PipeTransform } from '@angular/core';
import { ExpertCard } from './services/expertcards/expertcard.interface';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform( profiles:ExpertCard[], description: string): ExpertCard[] {
    if(!profiles || description == ''){
      return profiles
    }

    const filtered: ExpertCard[] =[]

    for(let profile of profiles){
      if(profile.description.toLowerCase().includes(description.toLowerCase())){
        filtered.push(profile)
      }
    }

    return filtered
  }
}
