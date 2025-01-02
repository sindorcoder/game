/* eslint-disable no-undef */
const path = require("path");

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    i18n: {
      defaultLocale: "uz",
      locales: ["en", "ru", "uz"],
    },
    localePath: path.resolve("./public/locales"),
  };
}
1