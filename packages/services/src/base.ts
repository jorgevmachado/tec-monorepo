import { isBrowser } from './window';

export type TDomain = '.geek.com.br';

export type TPlatform = 'DESKTOP' | 'MOBILE';

export default class Base {
    private _domain?: TDomain;
    private _platform?: TPlatform;

    get domain(): string {
        if (this._domain) {
            return this._domain;
        }
        this._domain = '.geek.com.br';
        return this._domain;
    }

    get platform(): TPlatform {

        if (this._platform) {
            return this._platform;
        }

        if (isBrowser()) {
            this._platform = window.outerWidth < 640 ? 'MOBILE' : 'DESKTOP';
            return this._platform;
        }

        return 'MOBILE';

    }

}