import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../../component/ImageItem";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class Art implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Art";
        Layout.current.content.append(this.container = el(".art-view",
            el("section",
                el("header",
                    el("h2", "Crypto Art"),
                    el(".tab-container",
                        el("a.active", "All NFTs", { click: () => { ViewUtil.go("/art") } }),
                        el("a", "On sale", { click: () => { ViewUtil.go("/art/on-sale") } }),
                        el("a", "On Bid", { click: () => { ViewUtil.go("/art/on-bid") } }),
                        el("a", "On Offerd", { click: () => { ViewUtil.go("/art/offerd") } }),
                    ),
                    el("hr"),
                ),
                el("article",
                    new ImageItem("", "title", "@artist ID", "0.0"),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}