import { ModelServiceData } from '../interface/i-request-mapping';
import { ModelVersionDescriptionResponse } from '../interface/i-response-mapping';
export declare class FetchModelDetails {
    constructor();
    getModelDetailsFrmDB(requestInput: ModelServiceData): Promise<ModelVersionDescriptionResponse>;
}
