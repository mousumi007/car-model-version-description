export interface ModelPathParams {
    company: string;
    brand: string;
    model: string;
}
export interface PathParams {
    company: string;
    brand: string;
    model: string;
}
export interface QueryString {
    versioncode: string;
}
export interface Model {
    modelDescription: string;
    versionDescription: string;
}
export interface RequestObject {
    pathParams: PathParams;
    headers: Headers;
    queryString: QueryString;
    runTimeInfo: RunTimeInfo;
}
export interface Headers {
    "accept-encoding": string;
    authorization: string;
    "cache-control": string;
    clientrequestid: string;
    "content-type": string;
}
export interface RunTimeInfo {
    cloudReqId: string;
    executionRegion: string;
    stage: string;
    httpMethod: string;
    resourcePath: string;
}
export interface ModelServiceData {
    pathParams: ModelPathParams;
    httpMethod: string;
    queryString?: QueryString;
}
