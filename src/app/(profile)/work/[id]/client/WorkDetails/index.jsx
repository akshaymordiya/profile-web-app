"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import workData from "../../../../../../data/work.page.json";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import Navbar from "@/app/components/Navbar";
import Aos from "@/app/components/AOS";
import "./index.scss";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

const WorkDetails = ({ id }) => {
  const BASE_CLASSNAME = "work-details-wrapper";

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const item = workData.projectList.find(
          (item) => item.id === parseInt(id)
        );
        setData(item);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setData({});
    };
  }, [id]);

  const slides = useMemo(() => {
    if (Object.keys(data).length < 1) {
      return [];
    }

    return [
      { src: data?.image }, // Add the first image as the initial slide
      ...data.srcset.map((i) => ({
        src: i.img,
      })),
    ];
  }, [data]);

  console.log("slides", slides);
  return (
    <>
      <Aos />
      <Navbar />
      {isLoading && <p>Loading portfolio item...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <>
          <div className={`${BASE_CLASSNAME}`}>
            <Grid classNames="container" key={data.id}>
              <Grid.Item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xlg={6}
                itemClass="imgcontent"
              >
                <div className="portfolio-thumb img-1">
                  <a onClick={() => setOpen(true)}>
                    <IMG
                      src={data?.image}
                      useRawImgTag
                      containerClasses="portfolio-thumb-img"
                      useContainer
                      onClick={({ index: current }) => setIndex(current)}
                    />
                  </a>
                  <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    plugins={[Thumbnails]}
                    slides={slides}
                  />
                </div>
              </Grid.Item>
              <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={6}>
                <div className="portfolio-content">
                  {/* <span className="portfolio-count"></span> */}
                  <h3 className="portfolio-title">
                    {/* {count} */}
                    {data?.title}
                  </h3>
                  <div className="portfoliocounter">
                    <div className="portfoliometahover">
                      <span>{data?.brand}, &nbsp; </span>
                    </div>
                    <div className="portfoliometahover">
                      <span>{data?.date}</span>
                    </div>
                  </div>
                  <p>{data?.description}</p>
                </div>
              </Grid.Item>
            </Grid>
          </div>
        </>
      )}
    </>
  );
};

export default WorkDetails;
