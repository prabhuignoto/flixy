import * as React from 'react';
import DetailsHome from './home/details-home';
import Images from '../../containers/details/images';
import Loader from '../media-loader';
import Movie from '../../models/Media';
import Panel from './panel/panel';
import useResponsive from '../../effects/useResponsive';
import {CloseIcon, MenuIcon} from '../icons/index';
import {tabs} from './panel/panel';
import {
  DetailsCardWrapper,
  DetailsWrapper,
  CloseDetails,
  ReviewsWrapper,
  RecommendedMoviesWrapper,
  RecommendedMoviesContainer,
  PanelContainer,
} from './details-main.styles';
import {SliderType} from '../../models/Slider';
import {RelatedMediaType, MediaType} from '../../containers/models';

const Reviews = React.lazy(() => import('../../containers/details/reviews'));
const Recommended = React.lazy(() => import('../../containers/related'));
const Similar = React.lazy(() => import('../../containers/related'));

type CardDetail = Movie & {
  handleClose?: () => void;
  isLoading: boolean;
  sliderType: SliderType;
};

export default ({
  title,
  handleClose,
  id,
  overview,
  genres,
  runtime,
  release_date,
  isLoading,
  original_language,
  vote_average,
  production_companies,
  sliderType,
  imdb_id,
}: CardDetail) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [actvTab, setActvTab] = React.useState(tabs.home);
  const resxProps = useResponsive();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) {
      return;
    }
  }, [show]);

  const togglePanel = () => {
    setShow(!show);
  };

  const handleSelection = React.useCallback((selectedTab: tabs) => {
    setActvTab(selectedTab);
    togglePanel();
  }, []);

  return (
    <DetailsCardWrapper ref={wrapperRef}>
      {!isLoading && (
        <>
          <DetailsWrapper>
            {actvTab === tabs.home && (
              <DetailsHome
                release_date={release_date}
                title={title}
                vote_average={vote_average}
                genres={genres}
                runtime={runtime}
                original_language={original_language}
                resxProps={resxProps}
                overview={overview}
                id={id}
                production_companies={production_companies}
                sliderType={sliderType}
                imdb_id={imdb_id}
              />
            )}
            {actvTab === tabs.recommended && (
              <RecommendedMoviesWrapper>
                <RecommendedMoviesContainer>
                  <React.Suspense fallback={<Loader />}>
                    <Recommended
                      id={id}
                      relatedMediaType={RelatedMediaType.RECOMMENDED}
                      type={
                        sliderType === SliderType.movies
                          ? MediaType.MOVIES
                          : MediaType.TV
                      }
                    />
                  </React.Suspense>
                </RecommendedMoviesContainer>
              </RecommendedMoviesWrapper>
            )}
            {actvTab === tabs.similar && (
              <RecommendedMoviesWrapper>
                <RecommendedMoviesContainer>
                  <React.Suspense fallback={<Loader />}>
                    <Similar
                      id={id}
                      relatedMediaType={RelatedMediaType.SIMILAR}
                      type={
                        sliderType === SliderType.movies
                          ? MediaType.MOVIES
                          : MediaType.TV
                      }
                    />
                  </React.Suspense>
                </RecommendedMoviesContainer>
              </RecommendedMoviesWrapper>
            )}
            {actvTab === tabs.posters && (
              <ReviewsWrapper resxProps={resxProps}>
                <Images movieId={id} sliderType={sliderType} />
              </ReviewsWrapper>
            )}
            {actvTab === tabs.reviews && (
              <ReviewsWrapper resxProps={resxProps}>
                <React.Suspense fallback={<div></div>}>
                  <Reviews movieId={id} />
                </React.Suspense>
              </ReviewsWrapper>
            )}
            <PanelContainer>
              <Panel onSelection={handleSelection} actvTab={actvTab} />
            </PanelContainer>
          </DetailsWrapper>
        </>
      )}
      <CloseDetails onClick={handleClose} resxProps={resxProps}>
        <CloseIcon color="#000" />
      </CloseDetails>
    </DetailsCardWrapper>
  );
};
