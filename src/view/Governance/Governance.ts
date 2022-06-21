import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ProposalItem from "../../component/ProposalItem";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class Governance implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Governance Play with";
        Layout.current.content.append(this.container = el(".governance-view",
            el("header",
                el("section",
                    el("h1", "Proposal with KLUBS"),
                    el("a", "거버넌스 정책 상세보기 >"),
                ),
                el(".vote-container",
                    el(".klu-container",
                        el("h6", "보유 투표권"),
                        el("p", "0 vKLU"),
                    ),
                ),
            ),
            el(".content",
                el(".button-container",
                    el("a", "투표 제안하기", {
                        click: () => {
                            ViewUtil.go("/governance/create")
                        }
                    }),
                ),
                el(".list-container",
                    el(".title-container",
                        el("h6", "전체 목록"),
                        el("a", "전체"),
                    ),
                    el(".item-container",
                        new ProposalItem(),
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