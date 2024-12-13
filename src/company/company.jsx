import Department from "../department/department";
import "./company.css";


function Company(props){
    const {companyName= 'Unknown Company' , details= 'No information avalable',departmentvalue, /*children*/} =props;
    // const buttonClick =(companyName)=>{
    //     console.log("selectone"+ companyName)
    // }
    return(
        <div className="details-main">
        <h1 className="Company-head">Company Name : {companyName}</h1>
        <p className="company-details">{details}</p>
        <button className="primary-btn">Click Button</button>
        <Department departmentvalue={departmentvalue}>
        <h5 className="department-name">Departments</h5>

        
        </Department>
         {/* <button onClick={()=>{buttonClick(companyName)}}>Select</button>  */}
        {/* {children} */}
        </div>
    );
}

export default Company;