import { Pipe , PipeTransform } from '@angular/core'


@Pipe({
    name : 'issueCat'
})

export class IssueCatPipe implements PipeTransform{
    transform(id:any,...args:any[]):any{
        switch (id) {
            case 0:
                return 'Accident Emergency';
                break;
        
            case 1:
                return 'Accident Prone';
                break;
            
            case 2:
                return 'Maintainence';
                break;    
                
            default:
                return 'Undefined'
                break;
        }
    }
}