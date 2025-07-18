import React from "react";
import { Link } from "react-router-dom";

type Props = {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
};

const JobCard = ({ _id, title, company, location, type }: Props) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Type:</strong> {type}</p>
      <Link to={`/job/${_id}`}>View Details</Link>
    </div>
  );
};

export default JobCard;
