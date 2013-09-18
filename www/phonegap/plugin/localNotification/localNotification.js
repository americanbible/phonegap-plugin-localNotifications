/**
 * 
 * @author Ally Ogilvie
 * @copyright WizCorp Inc. [ Incorporated Wizards ] 2011
 * @file localNotification.js for PhoneGap
 *
 * Refinements & updates: @author American Bible Society
 */

(function(cordova) {

  window.document.addEventListener("deviceready", function () {
    cordova.exec(null, null, "LocalNotification", "ready", []);
  }, false);

  var localNotification = {

    /**
     * Schedules a notification now.
     *
     * @param {Number|String} id - the notification identifier
     * @param {Object} options - hash of options
     *
     * Options include:
     *
     *  @param {Number} seconds - # of seconds from now to schedule (TODO: refactor to take a {Date})
     *  @param {Number} badge - number for the badge
     *  @param {String} message - text of the alertBody
     *  @param {String} repeat - repeat interval: /hourly|daily|weekly|monthly|yearly/
     */
    add : function(id, options) {
      return cordova.exec(null, null, "LocalNotification", "addNotification", [id, options]);
    },

    /**
     * Cancels a single notification
     * 
     * @param {Number|String} id - notification identifier
     */
    cancel : function(id) {
      return cordova.exec(null, null, "LocalNotification", "cancelNotification", [id]);
    },

    /**
     * Cancels all scheduled notifications.
     */
    cancelAll : function() {
      return cordova.exec(null, null,"LocalNotification", "cancelAllNotifications", []);
    },

    /**
     * Schedules a notification when the application enters the background.
     *
     * @see add()
     */
    queue : function(id, options) {
      return cordova.exec(null, null, "LocalNotification", "queueNotification", [id, options]);
    },

    getApplicationBadge : function(s) {
      return cordova.exec(s, null, "LocalNotification", "getApplicationBadge", []);
    },

    setApplicationBadge : function(intValue, s) {
      return cordova.exec(s, null, "LocalNotification", "setApplicationBadge", [intValue]);
    }
  };


  /** --------------------------------------------------------------------------
   * Install as a plugin.
   */
  cordova.addConstructor(function () {
    if (cordova.addPlugin) {
      cordova.addPlugin("localNotification", LocalNotification);
    } else {
      if (!window.plugins) {
        window.plugins = {};
      }
      window.plugins.localNotification = localNotification;
    }
  });

})(window.PhoneGap || window.Cordova || window.cordova);
