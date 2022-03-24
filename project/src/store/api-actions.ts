import { toast } from 'react-toastify';
import {
  addFavorite,
  loadFavorite,
  loadFilm,
  loadFilms,
  loadPromo,
  loadReviews,
  loadSimilarFilms,
  redirectToRoute,
  removeFavorite,
  requireAuthorization,
  requireLogout,
  updateFilm,
  updatePromo
} from './action';
import {
  dropToken,
  saveToken,
  Token
} from '../services/token';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  FavoriteAction,
  ToastMessage
} from '../const';
import type { AuthData } from '../types/auth-data';
import type { FilmFromServer } from '../types/film';
import type {
  ReviewPost,
  ReviewProps
} from '../types/review';
import type { ThunkActionResult } from '../types/action';

export const fetchPromoAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer>(APIRoute.Promo);
    dispatch(loadPromo(data));
  };

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

export const fetchFilmAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<FilmFromServer>(APIRoute.Film.replace(':id', `${filmId}`));
      dispatch(loadFilm(data));
    } catch {
      dispatch(redirectToRoute(APIRoute.NotFound));
      toast.error(ToastMessage.Film);
    }
  };

export const fetchSimilarFilmsAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer[]>(APIRoute.Similar.replace(':id', `${filmId}`));
    dispatch(loadSimilarFilms(data));
  };

export const fetchReviewsAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewProps[]>(APIRoute.Reviews.replace(':id', `${filmId}`));
    dispatch(loadReviews(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(ToastMessage.Auth);
    }
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      toast.error(ToastMessage.Login);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void>  => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const sendReviewAction = (filmId: number, review: ReviewPost ): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<ReviewProps[]>(APIRoute.Reviews.replace(':id', `${filmId}`), review);
      dispatch(loadReviews(data));
      dispatch(redirectToRoute(AppRoute.Film.replace(':id', `${filmId}/#Overview`)));
    } catch {
      toast.error(ToastMessage.Review);
    }
  };

export const fetchFavoriteFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void>  => {
    const {data} = await api.get<FilmFromServer[]>(APIRoute.Favorite);
    dispatch(loadFavorite(data));
  };

export const setFavoriteAction = (filmId: number, action: FavoriteAction): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.post<FilmFromServer>(`${APIRoute.Favorite}/${filmId}/${action}`);

    dispatch(updateFilm(data));

    if (getState().films.promo.id === filmId) {
      dispatch(updatePromo(data));
    }
    if (action === FavoriteAction.Add) {
      dispatch(addFavorite());
    }
    if (action === FavoriteAction.Remove) {
      dispatch(removeFavorite());
    }
  };
