import { ServiceHandler } from './services';
import { ModelServiceData } from './interface/i-request-mapping';
import REQUEST_OBJ from '../constants/mock-input/request.json';
import { FetchModelDetails } from './dao/fetchmodeldetails';

const LOG_PREFIX_CLASS = "App |";

export class App {

    public async invokeServiceHandler() {

        const LOG_PREFIX_FN: string = LOG_PREFIX_CLASS + 'invokeServiceHandler() | ';

        try {
            console.info(`${LOG_PREFIX_FN}  request object:   ${REQUEST_OBJ}`)
            
            const SERVICE_HANDLER = new ServiceHandler();
            const SERVICE_DATA: ModelServiceData = await SERVICE_HANDLER.getServiceData(REQUEST_OBJ);
            
            console.log(`${LOG_PREFIX_FN}   input data:   ${JSON.stringify(SERVICE_DATA)}`);

            let modelDetails = new FetchModelDetails();
            let transformedResponse = await modelDetails.getModelDetailsFrmDB(SERVICE_DATA);

            console.info(`${LOG_PREFIX_FN}   model and version description:   ${JSON.stringify(transformedResponse)}`);

        } catch (error) {
            throw error
        }
    }

}

let modelVersionDescriptionObj = new App();
modelVersionDescriptionObj.invokeServiceHandler().catch((error) => {
    console.error(` error:   ${JSON.stringify(error)}`)
});
