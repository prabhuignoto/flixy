import * as React from "react";
import {
  Wrapper as WrapperContainer,
  Header,
  MoviesWrapper,
  Title,
  ButtonWrapper,
  Footer,
  TitleIcon,
  TitleText,
} from "./index.styles";
import Movies from "./collection";
import { Button } from "../commons/styles";
import { useSpring } from "react-spring";
import { MinusIcon, PlusIcon, ArrowDownIcon, ArrowUpIcon } from "../icons";
import Slider from "../../models/Slider";

const SliderView: React.FunctionComponent<Slider> = ({
  movies,
  title,  
  fetchMore,
  totalResults,
  loadingState
}: Slider) => {
  const [open, setOpen] = React.useState(true);
  const [expandFull, setExpandFull] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [props, set] = useSpring(() => ({
    height: "320px",
    opacity: 1,
  }));

  const handleOpen = () => {
    setOpen(!open);
    if (open) {
      set({
        height: "0px",
        opacity: 0,
      });
      setExpandFull(false);
    } else {
      set({ height: "320px", opacity: 1 });
    }
  };

  const handleExpandFull = () => {
    setExpandFull(!expandFull);
    if (expandFull) {
      set({
        height: "320px",
        opacity: 1,
      });
    } else {
      set({
        height: `${320 * 3}px`,
        opacity: 1,
      });
    }
  };

  const handleLoadMore = () => {
    if (fetchMore) {
      fetchMore(page + 1);
    }
    setPage(page + 1);
  };

  return (
    <WrapperContainer expand={expandFull ? 1 : 0}>
      {/* header */}
      <Header onClick={handleOpen}>
        <Title>
          <TitleIcon></TitleIcon>
          <TitleText>{`${title}`}</TitleText>
        </Title>
        <ButtonWrapper>
          <Button size="small">{open ? <MinusIcon /> : <PlusIcon />}</Button>
        </ButtonWrapper>
      </Header>

      {/* movies list */}
      {(
        <MoviesWrapper expand={expandFull ? 1 : 0} style={props}>
          <Movies
            items={movies}
            slider={!expandFull ? 1 : 0}
            expandFull={expandFull ? 1 : 0}
            fetchMore={handleLoadMore}
            totalResults={totalResults}
            loadingState={loadingState}
          ></Movies>
        </MoviesWrapper>
      )}

      {/* footer section */}
      {open && (
        <Footer>
          <Button size="small" onClick={handleExpandFull}>
            {expandFull ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </Footer>
      )}
    </WrapperContainer>
  );
};

export default SliderView;
