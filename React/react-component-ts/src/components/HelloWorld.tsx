import React from "react";

interface IHelloProps {
  message: string;
  count?: number;
}

const HelloWorld: React.FC<IHelloProps> = (props) => {
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  )
}

export default HelloWorld;
