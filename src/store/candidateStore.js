import React, { createContext, useContext, useState } from "react";

const CandidateContext = createContext();

// Create Provider
export const CandidateProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "William Sample",
    designation: "Senior Product Manager",
    country: "United States",
    city: "Dallas",
    email: "williamsample@gmail.com",
    phone: "94954586586",
    organization: "World Bank Group",
    skills: "HTML, CSS, Javascript",
    availableFrom: "Jul, 14, 2023",
    salary: "$6000",
    noticePeriod: "90 Days",
    address: "9400 Ashton Rd, Philadelphia",
    resume: "Uploaded",
    experience: "10 Years",
  });

  return (
    <CandidateContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </CandidateContext.Provider>
  );
};


export const useCandidate = () => useContext(CandidateContext);
