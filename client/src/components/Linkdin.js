import React from "react";

const MyComp = (props) => {
  return (
    <div>
      {/* The Component 1 */}

      <div style={{ color: props.cnt % 2 == 0 ? "orange" : "white" }}>
        {props.data}
      </div>
      <br />
      {/* <a
        href="https://www.linkedin.com/in/dnyaneshwarshinde0611/"
        target="_blank"
      >
        Linkdin Profile
      </a> */}
    </div>
  );
};

const MyComp2 = () => {
  // return <div>The component 2</div>;
};

export { MyComp, MyComp2 };
