/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription', 'model/GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription'), require('./GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsUnsubscriptions = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription, root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription);
  }
}(this, function(ApiClient, GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription, GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription) {
  'use strict';




  /**
   * The GetExtendedContactDetailsStatisticsUnsubscriptions model module.
   * @module model/GetExtendedContactDetailsStatisticsUnsubscriptions
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>GetExtendedContactDetailsStatisticsUnsubscriptions</code>.
   * Listing of the unsubscription for the contact
   * @alias module:model/GetExtendedContactDetailsStatisticsUnsubscriptions
   * @class
   * @param userUnsubscription {Array.<module:model/GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription>} Contact unsubscribe via unsubscription link in a campaign
   * @param adminUnsubscription {Array.<module:model/GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription>} Contact has been unsubscribed from the administrator
   */
  var exports = function(userUnsubscription, adminUnsubscription) {
    var _this = this;

    _this['userUnsubscription'] = userUnsubscription;
    _this['adminUnsubscription'] = adminUnsubscription;
  };

  /**
   * Constructs a <code>GetExtendedContactDetailsStatisticsUnsubscriptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedContactDetailsStatisticsUnsubscriptions} obj Optional instance to populate.
   * @return {module:model/GetExtendedContactDetailsStatisticsUnsubscriptions} The populated <code>GetExtendedContactDetailsStatisticsUnsubscriptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userUnsubscription')) {
        obj['userUnsubscription'] = ApiClient.convertToType(data['userUnsubscription'], [GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription]);
      }
      if (data.hasOwnProperty('adminUnsubscription')) {
        obj['adminUnsubscription'] = ApiClient.convertToType(data['adminUnsubscription'], [GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription]);
      }
    }
    return obj;
  }

  /**
   * Contact unsubscribe via unsubscription link in a campaign
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription>} userUnsubscription
   */
  exports.prototype['userUnsubscription'] = undefined;
  /**
   * Contact has been unsubscribed from the administrator
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription>} adminUnsubscription
   */
  exports.prototype['adminUnsubscription'] = undefined;



  return exports;
}));


