import { Pipe , PipeTransform } from '@angular/core'


@Pipe({
    name : 'issueStat'
})

export class IssueStatusPipe implements PipeTransform{
    transform(id:any,...args:any[]):any{
        switch (id) {
            case 0:
                return 'Pending Action';
                
        
            case 1:
                return 'Verified';
                 
            
            case 2:
                return 'Under Process';
                    
                
            default:
                return 'Undefined'
                
        }
    }
}