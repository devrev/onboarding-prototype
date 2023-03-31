export const makeID = (val) => {
  val = val.toLowerCase();
  val = val.replaceAll(" ", "_");
  return val;
};
