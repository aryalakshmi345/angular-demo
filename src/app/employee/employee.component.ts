import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
   empName:string = "Max Miller"
   empURL:string = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png"

   userAdd = ()=>{
    alert("Add button clicked..!")
   }

   getEmpName(event:any){
    this.empName = event.target.value
   }

   userSubmit(userDetails:any){
    console.log(userDetails);
    if(userDetails.value){
      alert(`${userDetails.value} added`)
    }else{
      alert('Please Fill the form...')
    }
    
   }
}
