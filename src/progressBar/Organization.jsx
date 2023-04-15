import React from 'react';

function Organization(props) {
   const { name, removeOrganization } = props;
  return (
    <div>
      <p>{name}</p>
      <button onClick=
       {removeOrganization}>Remove
        Organization</button>
    </div>
  );

}

export default Organization