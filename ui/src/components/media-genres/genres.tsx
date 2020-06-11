import React from 'react';
import {Genre} from '../../models/Genre';
import {GenresWrapper, GenreItem} from './genres-styles';
import useResponsive from '../../effects/useResponsive';

export enum GenreSize {
  small = 'SMALL',
  large = 'LARGE',
}

const Genres: React.FunctionComponent<{
  items?: Genre[];
  size?: GenreSize;
}> = ({items, size}) => {
  const props = useResponsive();
  return (
    <GenresWrapper>
      {items &&
        items.map(({id, name}) => (
          <GenreItem key={id} resx={props}>
            {name}
          </GenreItem>
        ))}
    </GenresWrapper>
  );
};

export default Genres;
