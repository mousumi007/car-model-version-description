import { RequestObject, ModelServiceData } from '../interface/i-request-mapping';

const LOG_PREFIX_CLASS = "ServiceHandler |";

export class ServiceHandler {

    public async getServiceData(event: RequestObject) {
        const LOG_PREFIX_FN: string = LOG_PREFIX_CLASS + 'getVehicleServiceData() | ';

        try {
            const SERVICE_DATA: ModelServiceData = {
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
