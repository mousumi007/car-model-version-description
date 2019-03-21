import { ModelServiceData } from '../interface/i-request-mapping';
import { ModelVersionDescriptionResponse } from '../interface/i-response-mapping';
import DB_RESPONSE from '../../constants/mock-output/db-model-response.json';
import { DbResponse } from '../interface/i-response-mapping';
import { ModelRSTransformation } from '../utility/model-transformation';

const LOG_PREFIX_CLASS = "FetchModelDetails |";

export class FetchModelDetails {

    constructor() {
    }

    public async getModelDetailsFrmDB(requestInput: ModelServiceData) {

        const logPrefix = LOG_PREFIX_CLASS + "getModelDetailsFrmDB|";

        try {

            console.info(logPrefix + " Entry in fetchModelDetails : " + JSON.stringify(requestInput));

            let company: string = requestInput.pathParams && requestInput.pathParams.company.toLowerCase() || "";
            let brand: string = requestInput.pathParams && requestInput.pathParams.brand || "";
            let model: string = requestInput.pathParams && requestInput.pathParams.model || "";

            console.log(logPrefix + " Mock db response : " + JSON.stringify(DB_RESPONSE));
            let response: DbResponse = await DB_RESPONSE[company] && DB_RESPONSE[company][brand] && DB_RESPONSE[company][brand][model] || "";

            console.info(logPrefix + "filtered response::" + response);

            try {
            if (response && Object.keys(response).length > 0) {
                let transformObj = new ModelRSTransformation();
                let transformRS: ModelVersionDescriptionResponse = await transformObj.transformModelDetails(response);

                console.log(logPrefix + " transformed response : " + JSON.stringify(transformRS));
                return transformRS;
                
            } else {
              
                    let error = new Error();
                    error.name = "INVALID_REQUEST";
                    error.message = "Invalid Request Parameter";
                    console.error(logPrefix + "Error:" + JSON.stringify(error));
                    throw error;
            }
        } catch (error) {
            throw error;
        }
        }
        catch (error) {
            throw error;
        }
    }
}