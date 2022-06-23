import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../../component/ImageItem";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class MyArts implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "MyArts";
        Layout.current.content.append(this.container = el(".my-arts-view",
            el("section",
                el("header",
                    el("h2", "Idname"),
                    el("h3", "BY IDNAME"),
                    el(".tab-container",
                        el("a.active", "My Art List", { click: () => { ViewUtil.go("/user/my-arts") } }),
                        el("a", "On sale", { click: () => { ViewUtil.go("/user/on-sale") } }),
                        el("a", "On Bid", { click: () => { ViewUtil.go("/user/on-bid") } }),
                        el("a", "On Offerd", { click: () => { ViewUtil.go("/user/offerd") } }),
                    ),
                    el("hr"),
                ),
                el("article",
                    new ImageItem("", "title", "@artist ID", "0.0"),
                    new ImageItem("", "title", "@artist ID", "0.0"), new ImageItem("", "title", "@artist ID", "0.0"),
                    new ImageItem("", "title", "@artist ID", "0.0"), new ImageItem("", "title", "@artist ID", "0.0"),
                    new ImageItem("", "title", "@artist ID", "0.0"), new ImageItem("", "title", "@artist ID", "0.0"),
                    new ImageItem("", "title", "@artist ID", "0.0"), new ImageItem("", "title", "@artist ID", "0.0"),
                    new ImageItem("", "title", "@artist ID", "0.0"), new ImageItem("", "title", "@artist ID", "0.0"),
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