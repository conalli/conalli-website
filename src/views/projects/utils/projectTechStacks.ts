export type TechStackList = {
  css: boolean;
  express: boolean;
  flask: boolean;
  go: boolean;
  gql: boolean;
  js: boolean;
  material: boolean;
  mongo: boolean;
  psql: boolean;
  python: boolean;
  react: boolean;
  rust: boolean;
  ts: boolean;
};

export const mainTechStack = {
  css: true,
  express: true,
  flask: false,
  go: false,
  gql: false,
  js: true,
  material: false,
  mongo: true,
  psql: true,
  python: false,
  react: true,
  rust: false,
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
  python: true,
  flask: true,
  mongo: true,
  rust: true,
}

export const awayDaysTechStack = {
    ...noTechStack,
    js: true,
    ts: true,
    gql: true,
    psql: true,
}