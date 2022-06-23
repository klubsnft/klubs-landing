import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../component/ImageItem";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Meet Connect Play with";
        Layout.current.content.append(this.container = el(".home-view",
            el("section",
                el("header",
                    el(".pc-container",
                        el(".banner-container"),
                        el(".title-container",
                            el("h3", "Meet"),
                            el("h3", "Connect"),
                            el(".container",
                                el("h3", "Play"),
                                el("p", "with"),
                            ),
                            el("h2", "KLUBS"),
                            el("p", "BY IDNAME"),
                        ),
                    ),
                    el(".mobile-container",
                        el(".top-container",
                            el("h3", "Meet Connect Play"),
                            el("p", "BY IDNAME"),
                        ),
                        el(".banner-container"),
                        el(".bottom-container",
                            el("h3", "with"),
                            el("h2", "KLUBS"),
                        ),
                    ),
                ),
                el("article",
                    el(".art-container",
                        el("h6", "ART"),
                        el(".list-container",
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                        ),
                    ),
                    el(".pfp-container",
                        el("h6", "PFP"),
                        el(".list-container",
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                            new ImageItem("", "title", "@artist ID", "0.0"),
                        ),
                    ),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}