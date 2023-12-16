import React from "react";

interface ContentBoxProps {
  img: React.ReactNode; 
  name: string;
  description: string;
}

// Use the defined type for the props
function ContentBox(props: ContentBoxProps) {
  return (
    <div className="column-new">
      <div className="card">
        <div className="icon-wrapper">{props.img}</div>
        <h3 className="prop_name">{props.name}</h3>
        <p className="prop_desc">{props.description}</p>
      </div>
    </div>
  );
}

export default ContentBox;