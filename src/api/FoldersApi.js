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
    define(['ApiClient', 'model/CreateModel', 'model/CreateUpdateFolder', 'model/ErrorModel', 'model/GetFolder', 'model/GetFolderLists', 'model/GetFolders'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateModel'), require('../model/CreateUpdateFolder'), require('../model/ErrorModel'), require('../model/GetFolder'), require('../model/GetFolderLists'), require('../model/GetFolders'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.FoldersApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.CreateModel, root.SibApiV3Sdk.CreateUpdateFolder, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetFolder, root.SibApiV3Sdk.GetFolderLists, root.SibApiV3Sdk.GetFolders);
  }
}(this, function(ApiClient, CreateModel, CreateUpdateFolder, ErrorModel, GetFolder, GetFolderLists, GetFolders) {
  'use strict';

  /**
   * Folders service.
   * @module api/FoldersApi
   * @version 7.2.4
   */

  /**
   * Constructs a new FoldersApi. 
   * @alias module:api/FoldersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a folder
     * @param {module:model/CreateUpdateFolder} createFolder Name of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateModel} and HTTP response
     */
    this.createFolderWithHttpInfo = function(createFolder) {
      var postBody = createFolder;

      // verify the required parameter 'createFolder' is set
      if (createFolder === undefined || createFolder === null) {
        throw new Error("Missing the required parameter 'createFolder' when calling createFolder");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateModel;

      return this.apiClient.callApi(
        '/contacts/folders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a folder
     * @param {module:model/CreateUpdateFolder} createFolder Name of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateModel}
     */
    this.createFolder = function(createFolder) {
      return this.createFolderWithHttpInfo(createFolder)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a folder (and all its lists)
     * @param {Number} folderId Id of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteFolderWithHttpInfo = function(folderId) {
      var postBody = null;

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling deleteFolder");
      }


      var pathParams = {
        'folderId': folderId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/folders/{folderId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a folder (and all its lists)
     * @param {Number} folderId Id of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteFolder = function(folderId) {
      return this.deleteFolderWithHttpInfo(folderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a folder&#39;s details
     * @param {Number} folderId id of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFolder} and HTTP response
     */
    this.getFolderWithHttpInfo = function(folderId) {
      var postBody = null;

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolder");
      }


      var pathParams = {
        'folderId': folderId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetFolder;

      return this.apiClient.callApi(
        '/contacts/folders/{folderId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a folder&#39;s details
     * @param {Number} folderId id of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFolder}
     */
    this.getFolder = function(folderId) {
      return this.getFolderWithHttpInfo(folderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get lists in a folder
     * @param {Number} folderId Id of the folder
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFolderLists} and HTTP response
     */
    this.getFolderListsWithHttpInfo = function(folderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolderLists");
      }


      var pathParams = {
        'folderId': folderId
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetFolderLists;

      return this.apiClient.callApi(
        '/contacts/folders/{folderId}/lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get lists in a folder
     * @param {Number} folderId Id of the folder
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFolderLists}
     */
    this.getFolderLists = function(folderId, opts) {
      return this.getFolderListsWithHttpInfo(folderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all folders
     * @param {Number} limit Number of documents per page
     * @param {Number} offset Index of the first document of the page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFolders} and HTTP response
     */
    this.getFoldersWithHttpInfo = function(limit, offset) {
      var postBody = null;

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getFolders");
      }

      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getFolders");
      }


      var pathParams = {
      };
      var queryParams = {
        'limit': limit,
        'offset': offset,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetFolders;

      return this.apiClient.callApi(
        '/contacts/folders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all folders
     * @param {Number} limit Number of documents per page
     * @param {Number} offset Index of the first document of the page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFolders}
     */
    this.getFolders = function(limit, offset) {
      return this.getFoldersWithHttpInfo(limit, offset)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a folder
     * @param {Number} folderId Id of the folder
     * @param {module:model/CreateUpdateFolder} updateFolder Name of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateFolderWithHttpInfo = function(folderId, updateFolder) {
      var postBody = updateFolder;

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling updateFolder");
      }

      // verify the required parameter 'updateFolder' is set
      if (updateFolder === undefined || updateFolder === null) {
        throw new Error("Missing the required parameter 'updateFolder' when calling updateFolder");
      }


      var pathParams = {
        'folderId': folderId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/folders/{folderId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a folder
     * @param {Number} folderId Id of the folder
     * @param {module:model/CreateUpdateFolder} updateFolder Name of the folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateFolder = function(folderId, updateFolder) {
      return this.updateFolderWithHttpInfo(folderId, updateFolder)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
