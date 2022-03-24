export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum APIRoute {
  Films = '/films',
  Favorite = '/favorite',
  Film = '/films/:id',
  Similar = '/films/:id/similar',
  Reviews = '/comments/:id',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  NotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Genres {
  All = 'All genres',
}

export enum ToastMessage {
  Film = 'There\'s no such film',
  Auth = 'You aren\'t authorized',
  Login = 'Signing in failed',
  Review = 'Sending failed',
}

export enum Grade {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum FavoriteAction {
  Add = 1,
  Remove = 0,
}

export enum Time {
  Zero = 0,
  HourInSecond = 3600,
}
