import React from "react";
import ReactDOM from "react-dom";
import { Wrapper, ViewBtnWrapper } from "./withExtendInfo.styles";
import CardExtended, {
  CardExtendedModel,
  PositioningStrategy,
} from "./../media-card/card-extended";
import { MovieType } from "../media-card/card";

interface State {
  showExtendIcon: boolean;
  flipCard: boolean;
  showPane: boolean;
  showIcon: boolean;
  isMouseActive: boolean;
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
    private timer: number;

    constructor(props: P) {
      super(props);
      this.elementRef = React.createRef();
      this.state = {
        showExtendIcon: false,
        flipCard: false,
        showPane: false,
        showIcon: false,
        isMouseActive: false,
        position: {
          x: 0,
          y: 0,
        },
      };
      this.showPane = this.showPane.bind(this);
      this.startShowPaneTimer = this.startShowPaneTimer.bind(this);
      this.endShowPaneTimer = this.endShowPaneTimer.bind(this);
      this.hidePane = this.hidePane.bind(this);
      this.startTimer = this.startTimer.bind(this);
      this.endTimer = this.endTimer.bind(this);
      this.handleSelection = this.handleSelection.bind(this);
      this.timer = 0;
    }

    startTimer(ev: React.MouseEvent) {
      this.timer = setTimeout(() => {
        if (this.state.isMouseActive) {
          this.showPane(ev);
        }
      }, 750);
    }

    endTimer() {
      clearTimeout(this.timer);
    }

    showPane(ev: React.MouseEvent) {
      let flipCard = false;
      const node = this.elementRef.current as HTMLElement;
      const rects = node.getBoundingClientRect();
      let x, y;
      const { positioningStrategy } = this.props;
      let timer: number;

      // ev.stopPropagation();

      // check if the card needs to be flipped
      if (positioningStrategy === PositioningStrategy.absolute) {
        const width = window.screen.width > 1823 ? 600 : 480;
        if (rects.left + width > window.screen.width) {
          x = rects.left - (width - node.clientWidth);
          flipCard = true;
        } else {
          x = rects.left;
        }
        y = rects.top;
      } else {
        x = node.offsetLeft;
        y = node.offsetTop;
      }

      // update the state
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
      // ev.stopPropagation();
      this.setState({
        showPane: false,
        showExtendIcon: false,
      });
    }

    startShowPaneTimer(ev: React.MouseEvent) {
      this.setState(
        {
          showIcon: true,
          isMouseActive: true,
        },
        () => this.startTimer(ev)
      );
    }

    endShowPaneTimer() {
      this.setState(
        {
          showIcon: false,
          isMouseActive: false,
          showPane: false,
        },
        this.endTimer
      );
    }

    handleSelection() {
      this.setState({
        showPane: false,
        showIcon: false,
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
      const { showPane, flipCard, position } = this.state;
      return (
        <Wrapper
          onMouseEnter={this.startShowPaneTimer}
          onMouseLeave={this.endShowPaneTimer}
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
        </Wrapper>
      );
    }
  };
}
