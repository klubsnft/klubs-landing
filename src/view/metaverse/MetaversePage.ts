import { View, ViewParams } from "skydapp-common";

export default class MetaversePage implements View {
    container: any;

    constructor(params: ViewParams) {
        const id = parseInt(params.id!, 10);

        this.init(id);
    }

    private init(id: number) {
        window.location.href = `https://v1.klu.bs/metaverse/${id}`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}