import {
  FormEvent,
  useState
} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../../../store/api-actions';
import Footer from '../../footer/footer';
import { AppRoute } from '../../../const';
import type { AuthData } from '../../../types/auth-data';

const DEFAULT_FORM_STATE: AuthData = {
  email: '',
  password: '',
};

export default function SignIn(): JSX.Element {
  const [userInput, setUserInput] = useState(DEFAULT_FORM_STATE);
  const dispatch = useDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userInput.email !== '' && userInput.password !== '') {
      onSubmit(userInput);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={(evt) => setUserInput({
                  ...userInput,
                  email: evt.currentTarget.value,
                })}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={(evt) => setUserInput({
                  ...userInput,
                  password: evt.currentTarget.value,
                })}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
