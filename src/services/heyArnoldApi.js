/* eslint-disable max-len */
export const fetchHeyArnoldCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  return res.json();
};
