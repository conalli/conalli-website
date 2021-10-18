export const multi = (...classes: string[]): string =>  {
  return classes.reduce((prev, curr) => {return `${prev} ${curr}`}, "");
}