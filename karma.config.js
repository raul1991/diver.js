// Karma configuration
// Generated on Wed Oct 02 2019 10:45:07 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: "",
    files: ["tests/**/*.js", "diver.js"],
    exclude: [],
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    browsers: ["ChromeHeadless"],
    frameworks: ["jasmine"],
    reporters: ["jasmine-diff"]
  });
};
