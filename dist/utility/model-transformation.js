"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resultset_mapping_json_1 = __importDefault(require("../../constants/response-mapping/resultset-mapping.json"));
const LOG_PREFIX_CLASS = "FetchModelDetails |";
class ModelRSTransformation {
    async transformModelDetails(resultset) {
        const logPrefix = LOG_PREFIX_CLASS + "transformModelDetails|";
        let ReturnObj = {};
        let versionArray = [];
        try {
            console.info(logPrefix + " Entry in transformModelDetails : " + JSON.stringify(resultset));
            let MappingJSON = resultset_mapping_json_1.default || {};
            await resultset.forEach(async (data) => {
                let versionObj = {};
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
exports.ModelRSTransformation = ModelRSTransformation;
