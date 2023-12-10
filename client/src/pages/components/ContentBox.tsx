import React from "react";

// Define the type for the props
interface ContentBoxProps {
  img: React.ReactNode; // Assuming img is a React Node, you can adjust the type accordingly
  name: string;
  description: string;
}

// Use the defined type for the props
export default function ContentBox(props: ContentBoxProps) {
  return (
    <div className="column-new">
      <div className="card">
        <div className="icon-wrapper">{props.img}</div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
