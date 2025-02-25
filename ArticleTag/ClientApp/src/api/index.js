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
import {ApiClient} from './ApiClient';
import {ArticleDto} from './model/ArticleDto';
import {ArticleDtoResponse} from './model/ArticleDtoResponse';
import {ArticleRecordRequest} from './model/ArticleRecordRequest';
import {AuditArticleRequest} from './model/AuditArticleRequest';
import {AuditRecord} from './model/AuditRecord';
import {Auditor} from './model/Auditor';
import {BooleanResponse} from './model/BooleanResponse';
import {HttpCodeEnum} from './model/HttpCodeEnum';
import {Tag} from './model/Tag';
import {TagArticleStatusEnum} from './model/TagArticleStatusEnum';
import {TagRoleEnum} from './model/TagRoleEnum';
import {TaggedRecord} from './model/TaggedRecord';
import {TaggedRecordDto} from './model/TaggedRecordDto';
import {TaggedRecordDtoResponse} from './model/TaggedRecordDtoResponse';
import {TaggedRecordPagerVm} from './model/TaggedRecordPagerVm';
import {TaggerDto} from './model/TaggerDto';
import {TaggerDtoResponse} from './model/TaggerDtoResponse';
import {UserLoginResponse} from './model/UserLoginResponse';
import {UserLoginResponseResponse} from './model/UserLoginResponseResponse';
import {UserLoginVm} from './model/UserLoginVm';
import {UserVm} from './model/UserVm';
import {WorkloadDto} from './model/WorkloadDto';
import {WorkloadDtoResponse} from './model/WorkloadDtoResponse';
import {WorkloadItem} from './model/WorkloadItem';
import {WorkloadVm} from './model/WorkloadVm';
import {AccountApi} from './api/AccountApi';
import {ArticleApi} from './api/ArticleApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ArticleTag = require('index'); // See note below*.
* var xxxSvc = new ArticleTag.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ArticleTag.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ArticleTag.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ArticleTag.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ArticleDto model constructor.
     * @property {module:model/ArticleDto}
     */
    ArticleDto,

    /**
     * The ArticleDtoResponse model constructor.
     * @property {module:model/ArticleDtoResponse}
     */
    ArticleDtoResponse,

    /**
     * The ArticleRecordRequest model constructor.
     * @property {module:model/ArticleRecordRequest}
     */
    ArticleRecordRequest,

    /**
     * The AuditArticleRequest model constructor.
     * @property {module:model/AuditArticleRequest}
     */
    AuditArticleRequest,

    /**
     * The AuditRecord model constructor.
     * @property {module:model/AuditRecord}
     */
    AuditRecord,

    /**
     * The Auditor model constructor.
     * @property {module:model/Auditor}
     */
    Auditor,

    /**
     * The BooleanResponse model constructor.
     * @property {module:model/BooleanResponse}
     */
    BooleanResponse,

    /**
     * The HttpCodeEnum model constructor.
     * @property {module:model/HttpCodeEnum}
     */
    HttpCodeEnum,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The TagArticleStatusEnum model constructor.
     * @property {module:model/TagArticleStatusEnum}
     */
    TagArticleStatusEnum,

    /**
     * The TagRoleEnum model constructor.
     * @property {module:model/TagRoleEnum}
     */
    TagRoleEnum,

    /**
     * The TaggedRecord model constructor.
     * @property {module:model/TaggedRecord}
     */
    TaggedRecord,

    /**
     * The TaggedRecordDto model constructor.
     * @property {module:model/TaggedRecordDto}
     */
    TaggedRecordDto,

    /**
     * The TaggedRecordDtoResponse model constructor.
     * @property {module:model/TaggedRecordDtoResponse}
     */
    TaggedRecordDtoResponse,

    /**
     * The TaggedRecordPagerVm model constructor.
     * @property {module:model/TaggedRecordPagerVm}
     */
    TaggedRecordPagerVm,

    /**
     * The TaggerDto model constructor.
     * @property {module:model/TaggerDto}
     */
    TaggerDto,

    /**
     * The TaggerDtoResponse model constructor.
     * @property {module:model/TaggerDtoResponse}
     */
    TaggerDtoResponse,

    /**
     * The UserLoginResponse model constructor.
     * @property {module:model/UserLoginResponse}
     */
    UserLoginResponse,

    /**
     * The UserLoginResponseResponse model constructor.
     * @property {module:model/UserLoginResponseResponse}
     */
    UserLoginResponseResponse,

    /**
     * The UserLoginVm model constructor.
     * @property {module:model/UserLoginVm}
     */
    UserLoginVm,

    /**
     * The UserVm model constructor.
     * @property {module:model/UserVm}
     */
    UserVm,

    /**
     * The WorkloadDto model constructor.
     * @property {module:model/WorkloadDto}
     */
    WorkloadDto,

    /**
     * The WorkloadDtoResponse model constructor.
     * @property {module:model/WorkloadDtoResponse}
     */
    WorkloadDtoResponse,

    /**
     * The WorkloadItem model constructor.
     * @property {module:model/WorkloadItem}
     */
    WorkloadItem,

    /**
     * The WorkloadVm model constructor.
     * @property {module:model/WorkloadVm}
     */
    WorkloadVm,

    /**
    * The AccountApi service constructor.
    * @property {module:api/AccountApi}
    */
    AccountApi,

    /**
    * The ArticleApi service constructor.
    * @property {module:api/ArticleApi}
    */
    ArticleApi
};
