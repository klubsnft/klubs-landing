import { View, ViewParams } from "skydapp-common";

export default class MetaverseDetail implements View {
    container: any;

    constructor(params: ViewParams) {
        const addr = params.addr;
        const id = parseInt(params.id!, 10);

        this.init(addr!, id);
    }

    private init(addr: string, id: number) {
        window.location.href = `https://v1.klu.bs/metaverse/${id}/item/${addr}`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}