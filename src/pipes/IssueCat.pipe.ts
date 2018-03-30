import { Pipe , PipeTransform } from '@angular/core'


@Pipe({
    name : 'issueCat'
})

export class IssueCatPipe implements PipeTransform{
    transform(id:any,...args:any[]):any{
        switch (id) {
            case 0:
                return 'Accident Emergency';
                
        
            case 1:
                return 'Accident Prone';
                 
            
            case 2:
                return 'Maintainence';
                    
                
            default:
                return 'Undefined'
                
        }
    }
}