import { RequestObject, ModelServiceData } from '../interface/i-request-mapping';
export declare class ServiceHandler {
    getServiceData(event: RequestObject): Promise<ModelServiceData>;
}
