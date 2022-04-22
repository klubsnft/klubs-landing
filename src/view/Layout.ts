import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import MobileMenu from "../component/shared/menu/MobileMenu";
import PCMenu from "../component/shared/menu/PCMenu";
import UserInfo from "../component/shared/menu/UserInfo";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;

        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el(".nav",
                        el(".logo",
                            el("a", { href: "/" },
                                el("img", { src: "/images/shared/logo/klubs.svg", alt: "KLUBS LOGO" }),
                            ),
                        ),
                        new PCMenu(),
                        el(".right",
                            new UserInfo(),
                            el("a.menu-button", el("img", { src: "/images/shared/icn/menu.svg", alt: "menu" }), {
                                click: (event, button) => {
                                    const rect = button.rect;
                                    new MobileMenu({ left: rect.right - 170, top: rect.bottom }).appendTo(BodyNode);
                                },
                            }),
                        ),
                    ),
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
                    // el("section",
                    //     el("a", "Site Introduction"),
                    //     el("hr"),
                    //     el("a", "Privacy Policy"),
                    //     el("hr"),
                    //     el("a", "Email Unauthorized Collection Refusal"),
                    //     el("hr"),
                    //     el("a", "Limitations of Liability and Legal Notice"),
                    //     el("hr"),
                    //     el("a", "Terms of Use"),
                    //     el("hr"),
                    //     el("a", "Mobile Version"),
                    //     el("hr"),
                    //     el("a", "Partner & Marketing Partnership Inquiry"),
                    // ),
                ),
            )),
        );
    }

    public set title(title: string) {
        document.title = `${title} KLUBS`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}