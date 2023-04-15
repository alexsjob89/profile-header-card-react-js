import React from "react";




function ProgressBar(props) {
  const { percentage } = props;

  return (
    <div>
      <div
        style={{
          backgroundColor:
          "#e6e6e6",
          borderRadius: "20px",
          height: "15px",
          width: "100%",
          marginTop: "3rem",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            backgroundColor:
             "#F27B34",
            borderRadius: "15px",
            height: "100%",
            width: `
             ${percentage}%`,
            overflow: "hidden"
          }}
        ></div>
      </div>
      <p>{percentage.toFixed(1)}%</p>
    </div>
  );
}

export default ProgressBar;