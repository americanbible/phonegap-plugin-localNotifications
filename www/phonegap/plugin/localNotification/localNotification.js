/**
 * 
 * @author Ally Ogilvie
 * @copyright WizCorp Inc. [ Incorporated Wizards ] 2011
 * @file localNotification.js for PhoneGap
 *
 */

(function(cordova) {

  window.document.addEventListener("deviceready", function () {
    cordova.exec(null, null, "LocalNotification", "ready", []);
  }, false);

  var localNotification = {

    add : function(id, options) {
      return cordova.exec(null, null, "LocalNotification", "addNotification", [id, options]);
    },

    cancel : function(id) {
      return cordova.exec(null, null, "LocalNotification", "cancelNotification", [id]);
    },

    cancelAll : function() {
      return cordova.exec(null, null,"LocalNotification", "cancelAllNotifications", []);
    },

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
