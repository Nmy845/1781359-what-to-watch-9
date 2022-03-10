import MainScreen from '../main-screen/main-screen';
import CardTemplate from '../card-template/card-template';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import { Fragment } from 'react';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus } from '../../const';
import Player from '../player/player';

type AppScreenProps = {
  name: string,
  year: number,
  type: string,
}
function App({name, year, type}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <MainScreen name={name} year={year} type={type}>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
            <CardTemplate/>
          </MainScreen>
        }
        />
        <Route
          path={'login'}
          element={<SignIn/>}
        />
        <Route
          path={'mylist'}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={'films/:id'}
          element={<MoviePage/>}
        />
        <Route
          path={'player/:id'}
          element={<Player/>}
        />
        <Route
          path={'films/:id/review'}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AddReview/>
            </PrivateRoute>
          }
        />
        <Route
          path="*" element={
            <Fragment>
              <h1>
               404 Page not Found
              </h1>
              <Link to="/">Back to main page</Link>
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
