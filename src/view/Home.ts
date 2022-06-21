import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Meet Connect Play with";
        Layout.current.content.append(this.container = el(".home-view",
            el("section",
                el(".logo-container",
                    el("img", { src: "/images/shared/logo/klubs.svg", alt: "klubs" }),
                    el("p", "2.0"),
                ),
                el("p", "Coming Soon!"),
                el("a", "Go to V1", { href: "https://v1.klu.bs/" }),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}