import Company from "./company/company";
import "./index.css";

function App(){
    return(
        <div>
        <h1 className="App-main-head">Company Details</h1>
        <Company companyName="Microsoft" details="Microsoft is a product based company"/>
        <Company companyName="Zoho" details="ZOHO is a product based company"/>
        <Company companyName="CTS" details="TCS is a service based company"/>
        <Company />
        
        
        
        
        {/* <Company>
            <div>
                <h2>hi this is parthasarathy</h2>
            </div>
        </Company> */}
        </div>
    );
}
export default App;