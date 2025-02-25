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

/**
 * Enum class TagRoleEnum.
 * @enum {Number}
 * @readonly
 */
const TagRoleEnum = {
  /**
   * value: 0
   * @const
   */
  OfflineTagger: 0,

  /**
   * value: 1
   * @const
   */
  Auditor: 1,

  /**
   * value: 2
   * @const
   */
  OnlineTagger: 2,

  /**
   * Returns a <code>TagRoleEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/TagRoleEnum} The enum <code>TagRoleEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {TagRoleEnum};