"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const request_json_1 = __importDefault(require("../constants/mock-input/request.json"));
const fetchmodeldetails_1 = require("./dao/fetchmodeldetails");
const LOG_PREFIX_CLASS = "App |";
class App {
    async invokeServiceHandler() {
        const LOG_PREFIX_FN = LOG_PREFIX_CLASS + 'invokeServiceHandler() | ';
        try {
            console.info(`${LOG_PREFIX_FN}  request object:   ${request_json_1.default}`);
            const SERVICE_HANDLER = new services_1.ServiceHandler();
            const SERVICE_DATA = await SERVICE_HANDLER.getServiceData(request_json_1.default);
            console.log(`${LOG_PREFIX_FN}   input data:   ${JSON.stringify(SERVICE_DATA)}`);
            let modelDetails = new fetchmodeldetails_1.FetchModelDetails();
            let transformedResponse = await modelDetails.getModelDetailsFrmDB(SERVICE_DATA);
            console.info(`${LOG_PREFIX_FN}   model and version description:   ${JSON.stringify(transformedResponse)}`);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.App = App;
let modelVersionDescriptionObj = new App();
modelVersionDescriptionObj.invokeServiceHandler().catch((error) => {
    console.error(` error:   ${JSON.stringify(error)}`);
});
