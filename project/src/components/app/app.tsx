import MainScreen from '../main-screen/main-screen';
import CardTemplate from '../card-template/card-template';

type AppScreenProps = {
  name: string,
  year: number,
  type: string,
}
function App({name, year, type}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      name={name}
      year={year}
      type={type}
    >
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
      <CardTemplate />
    </MainScreen>
  );
}

export default App;
