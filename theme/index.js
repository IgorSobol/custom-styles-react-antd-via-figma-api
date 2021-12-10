import newColorsPalete from './colors';

export const updateTheme = (data) => {
  console.log(newColorsPalete(data));
  return {
    ...newColorsPalete(data)
  }
}
