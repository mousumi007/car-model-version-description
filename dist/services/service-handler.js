"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LOG_PREFIX_CLASS = "ServiceHandler |";
class ServiceHandler {
    async getServiceData(event) {
        const LOG_PREFIX_FN = LOG_PREFIX_CLASS + 'getVehicleServiceData() | ';
        try {
            const SERVICE_DATA = {
                "pathParams": event.pathParams,
                "httpMethod": event.runTimeInfo && event.runTimeInfo.httpMethod,
                "queryString": event.queryString
            };
            console.log(`${LOG_PREFIX_FN}  model Service Request: ${JSON.stringify(SERVICE_DATA)}`);
            return await SERVICE_DATA;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ServiceHandler = ServiceHandler;
