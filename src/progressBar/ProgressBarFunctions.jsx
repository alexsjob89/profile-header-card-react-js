import React,{useState} from 'react';
import InfoCircle from '../InfoCircle/InfoCircle';
import ProgressBar from "./ProgressBar";




function ProgressBarFunctions() {
 const [organizations, setOrganizations] = useState([]);
  const [showOrganizations, setShowOrganizations] = useState(true);
  const [percentage, setPercentage] = useState(100);

  const addOrganization = () => {
    setOrganizations([...organizations, organizations.length + 1]);
    updatePercentage();
  };

  const removeOrganization = () => {
    setOrganizations(organizations.slice(0, -1));
    updatePercentage();
  };

  const toggleOrganizations = () => {
    setShowOrganizations(!showOrganizations);
  };

  const updatePercentage = () => {
    const newPercentage = (organizations.length / 10) * 100;
    setPercentage(newPercentage);
  };

  return (
    <div className='progressBar-functions'>
      <h3>Organizations</h3>

        <div className="buttons">
      <button onClick={removeOrganization}>Remove Organization</button>
      <button onClick={addOrganization}>Add Organization</button>
      <button onClick={toggleOrganizations}>
        {showOrganizations ? "Hide Organizations" : "Show Organizations"}
      </button>
      </div>

      <div className="info-circle">
    <InfoCircle/>
</div>
<div className="show-organization">
      {showOrganizations && (
        <div >
          <p style={{

            marginBottom:"-2rem",
            width: "fit-content"}}>
            Number of organizations:
            {organizations.length}</p>
          <ProgressBar percentage={percentage} />
        </div>
      )}
      </div>
    </div>
  );
}








export default ProgressBarFunctions