
import "./company.css";


function Company(props){
    const {companyName= 'Unknown Company' , details= 'No information avalable', /*children*/} =props;
    // const buttonClick =(companyName)=>{
    //     console.log("selectone"+ companyName)
    // }
    return(
        <div className="details-main">
        <h1 className="Company-head">Company Name : {companyName}</h1>
        <p className="company-details">{details}</p>
        <button className="primary-btn">Click Button</button>
    
         {/* <button onClick={()=>{buttonClick(companyName)}}>Select</button>  */}
        {/* {children} */}
        </div>
    );
}

export default Company;