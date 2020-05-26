import React from "react";
import ReactDOM from "react-dom";
import { Wrapper, ViewBtnWrapper } from "./withExtendInfo.styles";
import CardExtended, {
  CardExtendedModel,
  PositioningStrategy,
} from "./../media-card/card-extended";
import { MovieType } from "../media-card/card";
import { ViewIcon } from "../icons";

interface State {
  showExtendIcon: boolean;
  flipCard: boolean;
  showPane: boolean;
  showIcon: boolean;
  position?: {
    x: number;
    y: number;
  };
}

export type CardExtendCustomModel = CardExtendedModel & MovieType;

export default function <P extends CardExtendCustomModel>(
  Component: React.FunctionComponent<MovieType>
) {
  return class ExtendInfoHOC extends React.Component<P, State> {
    private elementRef: React.RefObject<HTMLDivElement>;

    constructor(props: P) {
      super(props);
      this.elementRef = React.createRef();
      this.state = {
        showExtendIcon: false,
        flipCard: false,
        showPane: false,
        showIcon: false,
        position: {
          x: 0,
          y: 0,
        },
      };
      this.showPane = this.showPane.bind(this);
      this.showIcon = this.showIcon.bind(this);
      this.hideIcon = this.hideIcon.bind(this);
      this.hidePane = this.hidePane.bind(this);
      this.handleSelection = this.handleSelection.bind(this);
    }

    showPane(ev: React.MouseEvent) {
      ev.stopPropagation();
      let flipCard = false;
      const node = this.elementRef.current as HTMLElement;
      const rects = node.getBoundingClientRect();

      let x, y;
      if (this.props.positioningStrategy === PositioningStrategy.absolute) {
        if (rects.left + 500 > window.screen.width) {
          x = rects.left - (500 - node.clientWidth);
          flipCard = true;
        } else {
          x = rects.left;
        }
        y = rects.top;
      } else {
        x = node.offsetLeft;
        y = node.offsetTop;
      }

      this.setState(
        Object.assign({}, this.state, {
          showPane: true,
          flipCard,
          position: {
            x,
            y,
          },
        })
      );
    }

    hidePane(ev: React.MouseEvent) {
      ev.stopPropagation();
      this.setState(
        Object.assign({}, this.state, {
          showPane: false,
          showExtendIcon: false,
        })
      );
    }

    showIcon() {
      this.setState({
        showIcon: true,
      });
    }

    hideIcon() {
      this.setState({
        showIcon: false,
        showPane: false,
      });
    }

    handleSelection() {
      this.setState({
        showPane: false,
        showIcon: false
      });
      this.props.onSelect && this.props.onSelect(this.props.id);
    }

    render() {
      const container: HTMLElement | null = document.getElementById(
        `extended-card-enclosure-${this.props.containerId}`
      );

      const {
        poster_path,
        title,
        id,
        overview,
        genres,
        release_date,
        autoHeight,
        height,
        vote_average,
      } = this.props;
      const { showPane, flipCard, showIcon, position } = this.state;
      return (
        <Wrapper
          onMouseEnter={this.showIcon}
          onMouseLeave={this.hideIcon}
          ref={this.elementRef}
        >
          <Component {...this.props} />
          {this.state.showExtendIcon && <ViewBtnWrapper />}
          {showPane && container
            ? ReactDOM.createPortal(
                <CardExtended
                  poster_path={poster_path}
                  title={title}
                  id={id}
                  show={showPane}
                  release_date={release_date}
                  overview={overview}
                  genres={genres}
                  onClick={this.handleSelection}
                  flip={flipCard}
                  position={position}
                  closePane={this.hidePane}
                  autoHeight={autoHeight}
                  height={height}
                  vote_average={vote_average}
                />,
                container
              )
            : null}
          {showIcon && (
            <ViewBtnWrapper onClick={this.showPane}>
              <ViewIcon color="#cc0000" />
            </ViewBtnWrapper>
          )}
        </Wrapper>
      );
    }
  };
}
