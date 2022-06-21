import { View, ViewParams } from "skydapp-common";

export default class PFPPage implements View {
    container: any;

    constructor(params: ViewParams) {
        const addr = params.addr;

        this.init(addr!);
    }

    private init(addr: string) {
        window.location.href = `https://v1.klu.bs/pfp/${addr}`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}