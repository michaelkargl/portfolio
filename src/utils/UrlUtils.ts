export class UrlUtils {

    public static getSearchParams(): URLSearchParams {
        const searchParams = typeof window !== 'undefined' ? window.location.search : '';
        return new URLSearchParams (searchParams)
    }


    public static getUrlParam(name: string): string | null {
        const urlParams = this.getSearchParams();
        return urlParams.get(name);
    }

    public static setUrlParam(name: string, value: string) {
        const urlParams = this.getSearchParams();
        const currentValue = this.getUrlParam(name)
        if (value !== currentValue) {
            urlParams.set(name, value);
            window.location.search = urlParams.toString();
        }
    }

}