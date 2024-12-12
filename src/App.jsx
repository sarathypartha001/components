import Company from "./company/company";
import "./index.css";

function App(){
    return(
        <>
        <h1 className="App-main-head">Company Details</h1>
        <Company companyName="Microsoft" details="Microsoft is a product based company"/>
        <Company companyName="Zoho" details="ZOHO is a product based company"/>
        <Company companyName="CTS" details="TCS is a service based company"/>
        <Company />
        </>
    );
}
export default App;