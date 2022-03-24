import { createReducer } from '@reduxjs/toolkit';
import { filterFilmsByGenre } from '../../utils';
import {
  changeGenre,
  filterFilms
} from '../action';
import { Genres } from '../../const';
import type { FilterState } from '../../types/state';

const initialState: FilterState = {
  currentGenre: Genres.All,
  filteredFilms: [],
};

export const filterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(filterFilms, (state, action) => {
      state.filteredFilms = filterFilmsByGenre(action.payload, state.currentGenre);
    });
});
