export class UrlUtils {

    public static getUrlParam(name: string): string | null {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    public static setUrlParam(name: string, value: string) {
        const urlParams = new URLSearchParams(window.location.search);
        const currentValue = this.getUrlParam(name)
        if (value !== currentValue) {
            urlParams.set(name, value);
            window.location.search = urlParams.toString();
        }
    }

}