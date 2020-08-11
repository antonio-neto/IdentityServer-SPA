import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
 
@Injectable()
export class ConfigService {

    constructor() {}

    get authApiURI() {
        return `${environment.identityServer.authority}/api`;
    }

    get resourceApiURI() {
        return `${environment.identityServer.resourceApiUri}/api`;
    }
}
