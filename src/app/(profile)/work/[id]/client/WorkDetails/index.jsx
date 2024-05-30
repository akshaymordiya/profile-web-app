"use client";
import React, { useEffect, useState } from 'react';
import workData from "../../../../../../data/work.page.json";

const WorkDetails = ({
    id
}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const item = workData.projectList.find((item) => item.id === parseInt(id)); // Find by ID
          setData(item);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [id]);
  
    return (
      <>
        {isLoading && <p>Loading portfolio item...</p>}
        {error && <p>Error: {error}</p>}
        {data && <h1>Hello jinkal</h1>}
      </>
    );
}

export default WorkDetails