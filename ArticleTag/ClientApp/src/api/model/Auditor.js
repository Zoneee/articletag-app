/**
 * ArticleTag
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Auditor model module.
* @module model/Auditor
* @version v1
*/
export default class Auditor {
    /**
    * Constructs a new <code>Auditor</code>.
    * @alias module:model/Auditor
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Auditor</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Auditor} obj Optional instance to populate.
    * @return {module:model/Auditor} The populated <code>Auditor</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Auditor();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;




}
