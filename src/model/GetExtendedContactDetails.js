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
    define(['ApiClient', 'model/GetContactDetails', 'model/GetExtendedContactDetailsStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetContactDetails'), require('./GetExtendedContactDetailsStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedContactDetails = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetContactDetails, root.SibApiV3Sdk.GetExtendedContactDetailsStatistics);
  }
}(this, function(ApiClient, GetContactDetails, GetExtendedContactDetailsStatistics) {
  'use strict';




  /**
   * The GetExtendedContactDetails model module.
   * @module model/GetExtendedContactDetails
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>GetExtendedContactDetails</code>.
   * @alias module:model/GetExtendedContactDetails
   * @class
   * @implements module:model/GetContactDetails
   * @param email {String} Email address of the contact for which you requested the details
   * @param id {Number} ID of the contact for which you requested the details
   * @param emailBlacklisted {Boolean} Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
   * @param smsBlacklisted {Boolean} Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
   * @param createdAt {Date} Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {Date} Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param listIds {Array.<Number>} 
   * @param attributes {Object} Set of attributes of the contact
   * @param statistics {module:model/GetExtendedContactDetailsStatistics} 
   */
  var exports = function(email, id, emailBlacklisted, smsBlacklisted, createdAt, modifiedAt, listIds, attributes, statistics) {
    var _this = this;

    GetContactDetails.call(_this, email, id, emailBlacklisted, smsBlacklisted, createdAt, modifiedAt, listIds, attributes);
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>GetExtendedContactDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedContactDetails} obj Optional instance to populate.
   * @return {module:model/GetExtendedContactDetails} The populated <code>GetExtendedContactDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      GetContactDetails.constructFromObject(data, obj);
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = GetExtendedContactDetailsStatistics.constructFromObject(data['statistics']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetExtendedContactDetailsStatistics} statistics
   */
  exports.prototype['statistics'] = undefined;

  // Implement GetContactDetails interface:
  /**
   * Email address of the contact for which you requested the details
   * @member {String} email
   */
exports.prototype['email'] = undefined;

  /**
   * ID of the contact for which you requested the details
   * @member {Number} id
   */
exports.prototype['id'] = undefined;

  /**
   * Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
   * @member {Boolean} emailBlacklisted
   */
exports.prototype['emailBlacklisted'] = undefined;

  /**
   * Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
   * @member {Boolean} smsBlacklisted
   */
exports.prototype['smsBlacklisted'] = undefined;

  /**
   * Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} createdAt
   */
exports.prototype['createdAt'] = undefined;

  /**
   * Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} modifiedAt
   */
exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {Array.<Number>} listIds
   */
exports.prototype['listIds'] = undefined;

  /**
   * @member {Array.<Number>} listUnsubscribed
   */
exports.prototype['listUnsubscribed'] = undefined;

  /**
   * Set of attributes of the contact
   * @member {Object} attributes
   */
exports.prototype['attributes'] = undefined;



  return exports;
}));


