import { View, ViewParams } from "skydapp-common";

export default class ArtPage implements View {
    container: any;

    constructor(params: ViewParams) {
        const id = params.id;

        this.init(id!);
    }

    private init(id: string) {
        window.location.href = `https://v1.klu.bs/arts/${id}`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}