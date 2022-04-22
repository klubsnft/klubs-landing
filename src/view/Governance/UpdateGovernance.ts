import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class UpdateGovernance implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Meet Connect Play with";
        Layout.current.content.append(this.container = el(".home-view",
            el("h1", "Hello klubs"),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}