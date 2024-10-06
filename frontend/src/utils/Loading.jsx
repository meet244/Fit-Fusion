import React from "react";
import { DNA } from "react-loader-spinner";
const Loading = ({ text }) => {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperclassName="dna-wrapper"
    />
  );
};

export default Loading;
