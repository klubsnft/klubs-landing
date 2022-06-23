import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../../component/ImageItem";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class ArtDetail implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Art Detail";
        Layout.current.content.append(this.container = el(".art-detail-view",
            el("section",
                el("header",
                    el("hr"),
                    el(".img-container",
                        el("img", { src: "", alt: "test" }),
                    ),
                    el("hr"),
                ),
                el("article",
                    el(".title-container",
                        el("h2", "title"),
                        el(".info-container",
                            el(".content",
                                el("span", "Minterd on Apr 6, 2022"),
                                el("p", "Price : 300"),
                            ),
                            el("a", "Collect"),
                        ),
                    ),
                    el(".caption-container",
                        el(".artist-container",
                            el("h6", "Artist"),
                            el("p", "Artist"),
                        ),
                        el(".owner-container",
                            el("h6", "Owner"),
                            el("p", "Owner"),
                        ),
                    ),
                    el(".content",
                        el(".description-container",
                            el("h6", "Description"),
                            el("p", "Description"),
                        ),
                        el(".history-container",
                            el("h6", "Transaction History"),
                            el("p", "0x33333222ddddd ->  0x33333222ddddd 2022.06.22 111 by 0x8eedx"),
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