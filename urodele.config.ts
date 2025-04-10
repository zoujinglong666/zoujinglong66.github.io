export const config = {
  github: {
    login: "zoujinglong66", // github login name, not user name
    repo: "zoujinglong66.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "zoujinglong66",
    brand: "Urodele",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink25",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
