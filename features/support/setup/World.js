const { setWorldConstructor } = require("@cucumber/cucumber");
const { format } = require("date-fns");

class CustomWorld {
  constructor() {
    this.getDate = function (dateFormat) {
      return format(new Date(), dateFormat);
    };

    this.convertToMinAndSec = function (milliSecond) {
      const minutes = Math.floor(milliSecond / 60000);
      const seconds = Math.floor(milliSecond % 60000) / 1000;
      const milliSeconds = milliSecond % 1000;
      return { minutes, seconds, milliSeconds };
    };

    this.normalizeSpace = function (text) {
      return text.replace(/\s{2,}/g, " ").trim();
    };
  }
}

setWorldConstructor(CustomWorld);
