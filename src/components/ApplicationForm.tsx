import React, { useState } from "react";
import API from "../api";

type Props = {
  jobId: string;
};

const ApplicationForm = ({ jobId }: Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume_link: "",
    cover_letter: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await API.post("/applications", { ...form, job_id: jobId });
    alert("Application submitted!");
    setForm({
      name: "",
      email: "",
      resume_link: "",
      cover_letter: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "600px"
    }}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="resume_link"
        placeholder="Resume URL"
        value={form.resume_link}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <textarea
        name="cover_letter"
        placeholder="Cover Letter"
        value={form.cover_letter}
        onChange={handleChange}
        required
        style={{ ...inputStyle, height: "100px" }}
      />
      <button type="submit" style={{
        backgroundColor: "#27ae60",
        color: "#fff",
        border: "none",
        padding: "10px",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Apply Now
      </button>
    </form>
  );
};

const inputStyle: React.CSSProperties = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "14px"
};

export default ApplicationForm;
