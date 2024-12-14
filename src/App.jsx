import Company from "./company/company";
import "./index.css";
import { DepartmentDatas } from "./dataset";
import { useState } from "react";

function App(){
    let [SelectButton, setSelectButton]= useState("Company Details");
    let [departmentselectBtn, setdepartmentselectBtn] = useState("Departments");

    const HandleBtnclick = (companyName) =>{
       setSelectButton(companyName);
       
    }
    
    return(
        <div>
        <h1 className="App-main-head">{SelectButton}</h1>
        

         {DepartmentDatas.map((item,index)=>{
            return ( 
            <Company key={index}
            companyName= {item.companyName}
            details={item.details} 
            departmentvalue= {item.departmentvalue}
            onHandleBtnclick = {HandleBtnclick}
            />
            );
         })}
         












        {/* <Company companyName="Microsoft" 
                 details="Microsoft is a product based company" 
                 departmentvalue= {departmentvalue}
                 />
        <Company companyName="Zoho" 
                 details="ZOHO is a product based company" 
                 departmentvalue= {departmentvalue}
                 />
        <Company companyName="CTS" 
                 details="TCS is a service based company" 
                 departmentvalue= {departmentvalue}
                 />
        <Company departmentvalue= {departmentvalue}
                 /> */}
        
        
        
        
        {/* <Company>
            <div>
                <h2>hi this is parthasarathy</h2>
            </div>
        </Company> */}
        </div>
    );
}
export default App;