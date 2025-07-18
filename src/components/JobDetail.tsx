import React from "react";

type JobDetailProps = {
  title: string;
  description: string;
  type: string;
};

const JobDetail = ({ title, description, type }: JobDetailProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{title}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Type:</strong> {type}</p>
    </div>
  );
};

export default JobDetail;
