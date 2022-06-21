import EditorJS from "@editorjs/editorjs";
import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class GovernanceDetail implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Governance Play with";
        Layout.current.content.append(this.container = el(".governance-detail-view",
            el("a", "< Back", {
                click: () => {
                    ViewUtil.go("/governance");
                }
            }),
            el("section",
                el("header",
                    el("section",
                        el(".title-container",
                            el("h1", "가이아프로토콜 레벨 (A) 유지"),
                            el(".date", "투표 기간 | 2022-04-13 ~ 2022-04-15"),
                        ),
                        el(".klu-container",
                            el("h6", "내가 보유한 vKLU"),
                            el("p", "0 vKLU")
                        ),
                    ),
                ),
                el(".content",
                    el(".vote-container",
                        el("section.agree-container",
                            el("h6", "찬성"),
                            el(".top",
                                el("p.amount", "55,579,148 vKLU"),
                                el("p.percent", "94.70%"),
                            ),
                            el(".bottom", el(".percent_bar")),
                        ),
                        el("section.opposition-container",
                            el("h6", "반대"),
                            el(".top",
                                el("p.amount", "3,111,311 vKLU"),
                                el("p.percent", "5.30%"),
                            ),
                            el(".bottom", el(".percent_bar")),
                        ),
                    ),
                    el("hr"),
                    el("h6", "코드 세부 정보"),
                    el("p", "Governor.delayDelistingTime(0xD676e57Ca65b827fEb112AD81Ff738E7B6c1048d)"),
                    el("hr"),
                    el("h6", "제목"),
                    el("", { id: "editorjs" }),
                    el("hr"),
                    el("h6", "상세정보"),
                    el(".detail-list",
                        el(".list-item",
                            el("span.title", "투표 시작 블록"),
                            el("span", "87911048"),
                        ),
                    ),
                ),
            ),
        ));
        this.init();
    }

    private init() {
        new EditorJS({
            readOnly: true,
            data: {
                blocks: [
                    {
                        type: "paragraph",
                        data: {
                            text: "Hello, Editor.js",
                        }
                    }
                ]
            }
        })
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}