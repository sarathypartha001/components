import "./company.css";


function Company(props){
    return(
        <>
        <h1 className="Company-head">Company Name : {props.companyName}</h1>
        <p className="company-details">{props.details}</p>
        </>
    );
}

Company.defaultProps = {
    companyName : "unknown company",
    details : "No Information Availabe"
};

export default Company;