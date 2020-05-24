import React from "react";
import {
  Box1,
  Box2,
  Overview,
  CastAndCrewWrapper,
  CastAndCrewContainer,
  PostersWrapper,
  DetailsHomeWrapper,
  PostersAndProduction,
  ProductionWrapper
} from "./details-home.styles";
import DetailsTitle from "../title/details-title";
import ProductionDetails from "../production/details-production";
import { CastAndCrew } from "../details-cast-and-crew";
import { responsiveProps } from "../../../effects/useResponsive";
import Images from "../../../containers/details/images";
import { Genre } from "../../../models/Genre";
import { ProductionCompany } from "../../../models/ProductionCompany";

interface DetailsHomeModel {
  id?: number | string;
  original_language?: string;
  overview?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  genres?: Genre[];
  runtime?: number;
  imdb_id?: string;
  resxProps?: responsiveProps,
  production_companies?: ProductionCompany[];
}

const DetailsHome: React.FunctionComponent<DetailsHomeModel> = ({
  release_date,
  title,
  vote_average,
  genres,
  runtime,
  original_language,
  resxProps,
  overview,
  id,
  production_companies
}) => {
  return <DetailsHomeWrapper>
    <Box1>
      <DetailsTitle
        year={release_date}
        title={title}
        rating={vote_average}
        genres={genres}
        runtime={runtime}
        lang={original_language}
        releaseDate={release_date}
      ></DetailsTitle>
    </Box1>
    <Box2>
      <Overview resxProps={resxProps}>{overview}</Overview>
      <CastAndCrewWrapper resxProps={resxProps}>
        <CastAndCrewContainer resxProps={resxProps}>
          <CastAndCrew id={id} />
        </CastAndCrewContainer>
        {resxProps && resxProps.isBigScreen && (
          <PostersAndProduction resxProps={resxProps}>
            <ProductionWrapper>
              <ProductionDetails items={production_companies || []} />
            </ProductionWrapper>
            <PostersWrapper>
              <Images movieId={id} />
            </PostersWrapper>
          </PostersAndProduction>
        )}
      </CastAndCrewWrapper>
    </Box2>
  </DetailsHomeWrapper>
};


export default DetailsHome;