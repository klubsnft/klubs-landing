import { DomNode, el } from "skydapp-browser";

export default class VoteItem extends DomNode {

    constructor() {
        super(".vote-item");
        this.append(
            el("img", { src: "/images/shared/img/nft-mock.png", alt: "nft" }),
            el(".title-container",
                el("h6", "가이아 크로노스"),
                el("p", "Gaia Kronos"),
            ),
            el(".earn-container",
                el("p", "Earn up to"),
                el("span", "23.86%"),
            ),
            el("a", "투표하기"),
        );
    }
}