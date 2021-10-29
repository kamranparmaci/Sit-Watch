import { useEffect, useRef } from "react";
import { IMG_API } from "../../constant";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import {
  HorizontalContainer,
  ImgTab,
  Tab,
  TabContent,
  TabContentContainer,
  Trailer,
} from "./TabPanelStyles";

const TabPanel = ({ props, keys }) => {
  const { title, name, images } = props;
  const defaultRef = useRef();

  const renderedTrailers = _.map(keys[0], (key, idx) => {
    return (
      key &&
      idx < 6 && (
        <TabContentContainer key={uuidv4()}>
          <Trailer
            frameBorder="0"
            src={`https://www.youtube.com/embed/${key}`}
            responsiveSize
          ></Trailer>
        </TabContentContainer>
      )
    );
  });

  const backdrops = _.get(images, "backdrops");
  const renderedBackdrops = _.map(backdrops, (bd, idx) => {
    return (
      bd &&
      idx < 5 && (
        <TabContentContainer key={uuidv4()}>
          <ImgTab
            src={IMG_API + bd.file_path}
            alt={title ? title : name}
            responsiveSize
          />
        </TabContentContainer>
      )
    );
  });

  const posters = _.get(images, "posters");
  const renderedPosters = _.map(posters, (p, idx) => {
    return (
      p &&
      idx < 9 && (
        <TabContentContainer key={uuidv4()} posterSize>
          <ImgTab
            src={IMG_API + p.file_path}
            alt={title ? title : name}
            posterResponsiveSize
            posterSize
          />
        </TabContentContainer>
      )
    );
  });

  const openTabContent = (e, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  };
  useEffect(() => {
    // Get the element with id="defaultOpen" and click on it
    defaultRef.current.click();
  }, []);

  return (
    <>
      <Tab>
        <button>Media</button>
        <button
          className="tablinks"
          onClick={(e) => openTabContent(e, "Videos")}
          ref={defaultRef}
        >
          Videos
        </button>
        <button
          className="tablinks"
          onClick={(e) => openTabContent(e, "Backdrops")}
        >
          Backdrops
        </button>
        <button
          className="tablinks"
          onClick={(e) => openTabContent(e, "Posters")}
        >
          Posters
        </button>
      </Tab>

      <TabContent id="Videos" className="tabcontent">
        <HorizontalContainer>{renderedTrailers}</HorizontalContainer>
      </TabContent>
      <TabContent id="Backdrops" className="tabcontent">
        <HorizontalContainer>{renderedBackdrops}</HorizontalContainer>
      </TabContent>
      <TabContent id="Posters" className="tabcontent">
        <HorizontalContainer>{renderedPosters}</HorizontalContainer>
      </TabContent>
    </>
  );
};

export default TabPanel;
