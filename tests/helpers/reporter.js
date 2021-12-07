var reporters = require("jasmine-reporters");
var junitReporter = new reporters.JUnitXmlReporter({
  savePath: "test-output/",
  consolidateAll: false,
});
jasmine.getEnv().addReporter(junitReporter);
