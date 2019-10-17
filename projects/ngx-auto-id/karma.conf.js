// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  const finalConfig = {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-mocha-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage/ngx-auto-id'),
      reports: ['text-summary', 'lcovonly', 'html'],
      fixWebpackSourcePaths: true
    },
    reporters: ['mocha', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: [process.env.CI ? 'ChromeHeadlessTravis' : 'ChromeHeadless'],
    singleRun: true,
    customLaunchers: {}
  };

  if (process.env.CI) {
    finalConfig.customLaunchers.ChromeHeadlessTravis = {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox']
    }
  }

  config.set(finalConfig);
};
