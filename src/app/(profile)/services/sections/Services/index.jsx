import React from "react";
//components
import ServiceCard from "@/app/components/ServiceCards";

const Services = ({
  data = {}
}) => {

  const {
    images,
    data: serviceData
  } = data

  return (
    <ServiceCard
      images={images}
      serviceData={serviceData}
    />
  );
};

export default Services;
