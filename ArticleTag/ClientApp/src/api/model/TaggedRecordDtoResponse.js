/*
 * ArticleTag
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {HttpCodeEnum} from './HttpCodeEnum';
import {TaggedRecordDto} from './TaggedRecordDto';

/**
 * The TaggedRecordDtoResponse model module.
 * @module model/TaggedRecordDtoResponse
 * @version v1
 */
export class TaggedRecordDtoResponse {
  /**
   * Constructs a new <code>TaggedRecordDtoResponse</code>.
   * @alias module:model/TaggedRecordDtoResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaggedRecordDtoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaggedRecordDtoResponse} obj Optional instance to populate.
   * @return {module:model/TaggedRecordDtoResponse} The populated <code>TaggedRecordDtoResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaggedRecordDtoResponse();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('httpCode'))
        obj.httpCode = ApiClient.convertToType(data['httpCode'], 'Number');
      if (data.hasOwnProperty('errorCode'))
        obj.errorCode = HttpCodeEnum.constructFromObject(data['errorCode']);
      if (data.hasOwnProperty('errorMsg'))
        obj.errorMsg = ApiClient.convertToType(data['errorMsg'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = TaggedRecordDto.constructFromObject(data['result']);
      if (data.hasOwnProperty('errorMsgModel'))
        obj.errorMsgModel = ApiClient.convertToType(data['errorMsgModel'], {'String': ['String']});
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
TaggedRecordDtoResponse.prototype.success = undefined;

/**
 * @member {Number} httpCode
 */
TaggedRecordDtoResponse.prototype.httpCode = undefined;

/**
 * @member {module:model/HttpCodeEnum} errorCode
 */
TaggedRecordDtoResponse.prototype.errorCode = undefined;

/**
 * @member {String} errorMsg
 */
TaggedRecordDtoResponse.prototype.errorMsg = undefined;

/**
 * @member {module:model/TaggedRecordDto} result
 */
TaggedRecordDtoResponse.prototype.result = undefined;

/**
 * @member {Object.<String, Array.<String>>} errorMsgModel
 */
TaggedRecordDtoResponse.prototype.errorMsgModel = undefined;

