import { Employee } from './employee.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  }    from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';

import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  constructor(private http:HttpClient ) 
  { }
  public getEmployees():Observable<Employee>
  {
    return this.http.get<Employee>("http://dummy.restapiexample.com/api/v1/employees");
    
 }
  public updateEmployee(body:JSON):Observable<Employee>
  {
    return this.http.put<Employee>("http://dummy.restapiexample.com/api/v1/update/"+body["id"],
    {
      "name": body["employee_name"],
      "salary": body["employee_salary"],
      "age": body["employee_age"],
      "id": body["id"]
  })   .pipe(catchError(errorResponse=>{
       if (errorResponse.error.text.includes("SQLSTATE[23000]"))
       {
        return throwError("Duplicate Name Please Try Another Name");
       }
       else{
        return throwError("Error Occured");
       }
       
  }))
 
  // })
  }
  public removeEmployee(data:JSON):Observable<any>{
    return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/"+data["id"])

  }
  public createEmployee(body:JSON):Observable<any>{
    return this.http.post("	http://dummy.restapiexample.com/api/v1/create",{
      "name": body["employee_name"],
      "salary": body["employee_salary"],
      "age": body["employee_age"],
    })
  }
  
 


}
