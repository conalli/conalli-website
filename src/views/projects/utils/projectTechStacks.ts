export type TechStackList = {
  css: boolean;
  express: boolean;
  go: boolean;
  gql: boolean;
  js: boolean;
  material: boolean;
  mongo: boolean;
  psql: boolean;
  react: boolean;
  ts: boolean;
};

export const mainTechStack = {
  css: true,
  express: true,
  go: true,
  gql: true,
  js: true,
  material: true,
  mongo: true,
  psql: true,
  react: true,
  ts: true,
};

const noTechStack = {
  css: false,
  express: false,
  flask: false,
  go: false,
  gql: false,
  js: false,
  material: false,
  mongo: false,
  psql: false,
  python: false,
  react: false,
  rust: false,
  ts: false,
};

export const myNiwaTechStack = {
  ...noTechStack,
  css: true,
  express: true,
  go: true,
  material: true,
  react: true,
  mongo: true,
  ts: true,
};

export const bookshelfTechStack = {
  ...noTechStack,
  go: true,
  react: true,
  mongo: true,
  ts: true,
}

export const awayDaysTechStack = {
    ...noTechStack,
    js: true,
    ts: true,
    gql: true,
    psql: true,
}