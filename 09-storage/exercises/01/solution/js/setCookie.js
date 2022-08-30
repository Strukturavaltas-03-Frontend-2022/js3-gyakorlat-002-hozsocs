/* 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár! */
const setCookie = (string) => {
  // setCookie(name, value, expirationDays = 365, path = '/') {
  /*  const now = new Date();
  now.setTime(now.getTime() + (15 * 60 * 1000));
  console.log(now); */
  const expires = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
  document.cookie = `token=${string};expires=${expires}`;
};
setCookie('szia');
export default setCookie;
