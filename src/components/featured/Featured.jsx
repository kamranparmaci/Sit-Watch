import React from "react";
import { SectionFeatures, FeaturedH1 } from "./FeaturedStyles";
import CustomSlider from "../custom-slider/CustomSlider";
import { POPULAR_API, TRENDING_API, TV_ON_AIR_API } from "../../constant";

const Featured = () => {
  return (
    <>
      <SectionFeatures>
        <FeaturedH1>Trending</FeaturedH1>
        <CustomSlider url={TRENDING_API} />
        <FeaturedH1>TV On Air</FeaturedH1>
        <CustomSlider url={TV_ON_AIR_API} />
        <FeaturedH1>See Popular</FeaturedH1>
        <CustomSlider url={POPULAR_API} />
      </SectionFeatures>
    </>
  );
};

export default Featured;
