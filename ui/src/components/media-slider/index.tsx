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
import { useSpring, config } from "react-spring";
import { MinusIcon, PlusIcon, ArrowDownIcon, ArrowUpIcon } from "../icons";
import Slider from "../../models/Slider";

const SliderView: React.FunctionComponent<Slider> = ({
  movies,
  title,
}: Slider) => {
  const [openWrapper, setOpenWrapper] = React.useState(true);
  const [showMovies, setShowMovies] = React.useState(true);
  const [expandFull, setExpandFull] = React.useState(false);

  const [props, set] = useSpring(() => ({
    height: "320px",
    opacity: 1,
  }));

  const handleWrapperExpand = () => {
    setOpenWrapper(!openWrapper);
    if (openWrapper) {
      set({
        height: "0px",
        opacity: 0,
      }); 
      setExpandFull(false);
    } else {
      setShowMovies(true);
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

  return (
    <WrapperContainer expand={expandFull ? 1 : 0}>
      {/* header */}
      <Header onClick={handleWrapperExpand}>
        <Title>
          <TitleIcon></TitleIcon>
          <TitleText>{`${title}`}</TitleText>
        </Title>
        <ButtonWrapper>
          <Button size="small">
            {openWrapper ? <MinusIcon /> : <PlusIcon />}
          </Button>
        </ButtonWrapper>
      </Header>

      {/* movies list */}
      {showMovies && (
        <MoviesWrapper expand={expandFull ? 1 : 0} style={props}>
          <Movies
            items={movies}
            slider={!expandFull ? 1 : 0}
            expandFull={expandFull ? 1 : 0}
          ></Movies>
        </MoviesWrapper>
      )}

      {/* footer section */}
      {openWrapper && (
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
