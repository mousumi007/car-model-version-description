
export interface VersionCode{
    versioncode : string
    versionDescription: string
}

export interface DbResponseObject {
    X_MOD_DESC: string;
    X_VERSN_DESC: string;
    C_VERSN: string;
}

export interface DbResponse extends Array<DbResponseObject>{} 

export interface Version {
    versionCode: string;
    versionDescription: string;
}

export interface ModelVersionDescriptionResponse {
    versions: Version[];
    modelDescription: string;
}