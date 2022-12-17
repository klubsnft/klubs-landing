import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Confirm from "../component/shared/dialogue/Confirm";
import Prompt from "../component/shared/dialogue/Prompt";
import VoteItem from "../component/VoteItem";
import Layout from "./Layout";

export default class Staking implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Staking Play with";
        Layout.current.content.append(this.container = el(".staking-view",
            el("header",
                el("section",
                    el("h1", "Staking Play with KLU"),
                    el(".interest-container",
                        el("section",
                            el("dl",
                                el("dt", "스테이킹"),
                                el("dd", "55.01%"),
                            ),
                            el("dl",
                                el("dt", "드랍스"),
                                el("dd", "56.06%"),
                            ),
                            el("dl",
                                el("dt", "풀투표"),
                                el("dd", "23.93%"),
                            ),
                            el(".how-wrap",
                                el("a", "보상 획득 방법 >"),
                            ),
                        ),
                        el("hr"),
                        el("section",
                            el("h6", "예상 수익률"),
                            el("p", "연 16.88%"),
                            el("p", "~"),
                            el("p", "연 135.05%"),
                        ),
                    ),
                ),
                el(".staking-container",
                    el("section",
                        el("header",
                            el("h6", "스테이킹 수량"),
                            el(".button-container",
                                el("a.disabled", "언스테이킹"),
                                el("a", "스테이킹"),
                            ),
                        ),
                        el("content",
                            el(".klu-container",
                                el("p", "0"),
                                el("span", "vKLU"),
                            ),
                            el(".prediction-container",
                                el("p", "예상 수익률"),
                                el("span", "연 6.74 % ~ 연 53.97 %"),
                            ),
                        ),
                    ),
                    el("hr"),
                    el("section",
                        el("header",
                            el("h6", "보상 수량"),
                            el(".button-container",
                                el("a.disabled", "보상 수령"),
                            ),
                        ),
                        el("content",
                            el(".klu-container",
                                el("p", "0"),
                                el("span", "vKLU"),
                            ),
                            el(".prediction-container",
                                el("p", "누적"),
                                el("span", "0 vKLU"),
                            ),
                        ),
                    ),
                ),
            ),
            el("content",
                el(".my-container",
                    el(".title-container",
                        el("section",
                            el("h6", "보유 투표권"),
                            el("p", "투표권 획득 방법"),
                        ),
                        el("span", "0 vKLU"),
                    ),
                    el(".pool-container",
                        el("p", "풀 투표 참여 가능"),
                        el("span", "0 vKLU"),
                    ),
                ),
                el(".list-container",
                    el("input", { placeholder: "NFT명 검색" }),
                    el("hr"),
                    new VoteItem(),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}