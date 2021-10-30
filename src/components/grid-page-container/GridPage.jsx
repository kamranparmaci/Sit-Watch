import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  FeaturedH1,
  GridContainer,
  GridBackground,
  GridContainerPeople,
} from "./GridPageStyles";
import { useHistory } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import Card from "../card/Card";
import { v4 as uuidv4 } from "uuid";
import { Meta } from "../../utils";

const GridPage = ({ people, url, title }) => {
  const [pageNum, setPageNum] = useState(1);
  const [pageY, setPageY] = useState(0);

  const movies = useMovies(url, pageNum);
  const history = useHistory();

  const scrollTopBtn = () => {
    return pageY > 100 ? (
      <div
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          display: "block",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          position: "fixed",
          right: "20px",
          bottom: "50px",
          color: "#fff",
          border: "0",
          cursor: "pointer",
          backgroundImage: `url("../../img/scroll.png")`,
        }}
      ></div>
    ) : (
      ""
    );
  };

  useEffect(() => {
    const handlePageY = () => {
      setPageY(window.pageYOffset);
    };

    document.addEventListener("scroll", handlePageY);
    return () => {
      document.removeEventListener("scroll", handlePageY);
    };
  });

  // Finding a last element to increased page number to make another page call
  const observer = useRef();
  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNum((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <GridBackground people={people}>
      <Meta title={title} />
      <div className="container">
        <FeaturedH1>{title}</FeaturedH1>
        {people && (
          <GridContainerPeople>
            {movies.map((p, i) => {
              const onclick = () => {
                history.push(`${p.id}`);
              };
              return movies.length === i + 1 ? (
                <div key={uuidv4()} onClick={onclick} ref={lastElementRef}>
                  <Card
                    width={185}
                    height={420}
                    cardInfo={p}
                    movieAndTvSize
                    peopleSize
                  />
                </div>
              ) : (
                <div key={uuidv4()} onClick={onclick}>
                  <Card
                    width={185}
                    height={420}
                    cardInfo={p}
                    movieAndTvSize
                    peopleSize
                  />
                </div>
              );
            })}
          </GridContainerPeople>
        )}
        {!people && (
          <GridContainer>
            {movies.map((p, i) => {
              const onclick = () => {
                history.push(`${p.id}`);
              };
              return movies.length === i + 1 ? (
                <div key={uuidv4()} onClick={onclick} ref={lastElementRef}>
                  <Card
                    width={180}
                    height={420}
                    cardInfo={p}
                    movieAndTvSize
                    peopleSize
                  />
                </div>
              ) : (
                <div key={uuidv4()} onClick={onclick}>
                  <Card
                    width={180}
                    height={420}
                    cardInfo={p}
                    movieAndTvSize
                    peopleSize
                  />
                </div>
              );
            })}
          </GridContainer>
        )}
        {scrollTopBtn()}
      </div>
    </GridBackground>
  );
};

export default GridPage;
