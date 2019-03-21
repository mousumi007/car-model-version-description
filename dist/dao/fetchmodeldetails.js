"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_model_response_json_1 = __importDefault(require("../../constants/mock-output/db-model-response.json"));
const model_transformation_1 = require("../utility/model-transformation");
const LOG_PREFIX_CLASS = "FetchModelDetails |";
class FetchModelDetails {
    constructor() {
    }
    async getModelDetailsFrmDB(requestInput) {
        const logPrefix = LOG_PREFIX_CLASS + "getModelDetailsFrmDB|";
        try {
            console.info(logPrefix + " Entry in fetchModelDetails : " + JSON.stringify(requestInput));
            let company = requestInput.pathParams && requestInput.pathParams.company.toLowerCase() || "";
            let brand = requestInput.pathParams && requestInput.pathParams.brand || "";
            let model = requestInput.pathParams && requestInput.pathParams.model || "";
            console.log(logPrefix + " Mock db response : " + JSON.stringify(db_model_response_json_1.default));
            let response = await db_model_response_json_1.default[company] && db_model_response_json_1.default[company][brand] && db_model_response_json_1.default[company][brand][model] || "";
            console.info(logPrefix + "filtered response::" + response);
            try {
                if (response && Object.keys(response).length > 0) {
                    let transformObj = new model_transformation_1.ModelRSTransformation();
                    let transformRS = await transformObj.transformModelDetails(response);
                    console.log(logPrefix + " transformed response : " + JSON.stringify(transformRS));
                    return transformRS;
                }
                else {
                    let error = new Error();
                    error.name = "INVALID_REQUEST";
                    error.message = "Invalid Request Parameter";
                    console.error(logPrefix + "Error:" + JSON.stringify(error));
                    throw error;
                }
            }
            catch (error) {
                throw error;
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.FetchModelDetails = FetchModelDetails;
