import React, { useState } from 'react';

const VotingEligibility = () => {
  const [age, setAge] = useState(20);  

  return (
    <div>
      {age >= 18 ? (
        <p>You are eligible to vote.</p>
      ) : (
        <p>You are not eligible to vote.</p>
      )}
    </div>
  );
};

export default VotingEligibility;
