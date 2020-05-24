import React from "react";
import { Wrapper, ViewBtnWrapper } from "./withExtendInfo.styles";
import CardExtended, { CardExtendedModel } from "./../media-card/card-extended";
import { MovieType } from "../media-card/card";
import { ViewIcon } from "../icons";

interface State {
  showExtendIcon: boolean;
  flipCard: boolean;
  showPane: boolean;
  showIcon: boolean;
}

type Custom = CardExtendedModel & MovieType;

export default function <P extends Custom>(
  Component: React.FunctionComponent<P>
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

      if (this.elementRef && this.elementRef.current) {
        // const { offsetLeft } = this.elementRef.current;
        const left = this.elementRef.current.getBoundingClientRect().left;
        if (left + 600 > window.screen.width) {
          flipCard = true;
        }
      }

      this.setState(
        Object.assign({}, this.state, {
          showPane: true,
          flipCard,
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
        showPane: false
      });
    }

    handleSelection() {
      this.props.onSelect && this.props.onSelect(this.props.id);
    }

    render() {
      const {
        poster_path,
        title,
        id,
        overview,
        genres,
        release_date,
        autoHeight,
      } = this.props;
      const { showPane, flipCard, showIcon } = this.state;
      return (
        <Wrapper
          onMouseEnter={this.showIcon}
          onMouseLeave={this.hideIcon}
          ref={this.elementRef}
        >
          <Component {...this.props} />
          {this.state.showExtendIcon && <ViewBtnWrapper />}
          {showPane && (
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
              closePane={this.hidePane}
              autoHeight={autoHeight}
            />
          )}
          {
            showIcon && <ViewBtnWrapper onClick={this.showPane}>
              <ViewIcon color="#cc0000" />
            </ViewBtnWrapper>
          }
        </Wrapper>
      );
    }
  };
}
