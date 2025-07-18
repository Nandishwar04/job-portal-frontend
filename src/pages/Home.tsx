import React, { useEffect, useState } from "react";
import API from "../api";
import JobCard from "../components/JobCard";

type JobType = {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
};

const Home = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <JobCard key={job._id} {...job} />
      ))}
    </div>
  );
};

export default Home;
