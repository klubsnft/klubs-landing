import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ProjectItem from "../../component/ProjectItem";
import Layout from "../Layout";

export default class Pfp implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "PFP";
        Layout.current.content.append(this.container = el(".pfp-view",
            el("section",
                el("header",
                    el(".title-cotnainer",
                        el("h2", "PFP"),
                        el("h3", "BY IDNAME"),
                    ),
                ),
                el("article",
                    new ProjectItem("", "title", "@artist ID", "WELCOME-TO-THE-REALMSF-EE"),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}