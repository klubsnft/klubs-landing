import { DomNode, el } from "skydapp-browser";

export default class GovernanceItem extends DomNode {

    constructor() {
        super(".proposal-item");
        this.append(
            el(".subject-container",
                el("header",
                    el("p", "1"),
                    el("h6", "가이아프로토콜 레벨 (A) 유지"),
                ),
                el("label", "진행"),
            ),
            el(".detail-container",
                el("header",
                    el("p", "투표 기간"),
                    el("h6", "22.04.21 ~ 22.04.25"),
                ),
                el("label", "미참여"),
            ),
        );
    }
}