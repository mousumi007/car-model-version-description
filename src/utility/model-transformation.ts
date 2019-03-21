import {DbResponse, Version} from '../interface/i-response-mapping';
import { ModelVersionDescriptionResponse } from '../interface/i-response-mapping';
import responseMapping from '../../constants/response-mapping/resultset-mapping.json';

const LOG_PREFIX_CLASS = "FetchModelDetails |";

export class ModelRSTransformation {

    public async transformModelDetails(resultset: DbResponse) {

        const logPrefix = LOG_PREFIX_CLASS + "transformModelDetails|";
        let ReturnObj: ModelVersionDescriptionResponse | any = {};
        let versionArray: any = [];

        try {
            console.info(logPrefix + " Entry in transformModelDetails : " + JSON.stringify(resultset));
           
            let MappingJSON: any = responseMapping || {};
            await resultset.forEach(async (data: any) => {

                let versionObj: Version | any = {};
                await Object.keys(MappingJSON).forEach((key) => {
                    /**Fetch all the keys from RS and store*/
                    let inputDataKey = MappingJSON[key];
                    if (typeof (inputDataKey) === "object") {

                        Object.keys(inputDataKey).forEach((subKey) => {
                            let value = MappingJSON[key][subKey];
                            if (data[subKey])
                                versionObj[value] = data[subKey];
                        });
                        if (versionObj)
                            versionArray.push(versionObj);
                        if (versionArray.length > 0)
                            ReturnObj[key] = versionArray;
                    }
                    else {
                        let value = MappingJSON[key];
                        if (data[key])
                            ReturnObj[value] = data[key];
                    }
                });
            });
            return ReturnObj;
        }
        catch (error) {
            throw error;
        }
    }
}