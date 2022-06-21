import EditorJS from "@editorjs/editorjs";
import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Select from "../../component/shared/Select";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class CreateGovernance implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Governance Play with";
        Layout.current.content.append(this.container = el(".create-governance-view",
            el("a", "< Back", {
                click: () => {
                    ViewUtil.go("/governance");
                }
            }),
            el("section",
                el("header",
                    el("h1", "Propose a vote"),
                    el("h6", "유의사항"),
                    el("ul",
                        el("li", "제출된 거버넌스 제안은 수정 또는 취소할 수 없습니다. 최종 제출 전 반드시 내역을 확인 후 등록해주세요."),
                    ),
                    el("a", "거버넌스 정책 상세보기"),
                ),
                el(".content",
                    el(".klu-container",
                        el("section",
                            el("h6", "보유 KLU"),
                            el(".amount-container",
                                el("p", "0 KLU"),
                                el("span", "등록 비용 500 KLU"),
                            ),
                        ),
                        el("hr"),
                        el("section",
                            el("h6", "보유 투표권"),
                            el(".amount-container",
                                el("p", "0 vKLU (0%)"),
                                el("span", "최소 보유 투표권 | 300,000 vKLU"),
                            ),
                        ),
                    ),
                    el("input", { placeholder: "제목" }),
                    el("", { id: "editorjs" }),
                    el("a", "제안서 제출"),
                ),
            ),
        ));
        this.init();
    }

    private init() {
        new EditorJS({
            placeholder: "제안을 설명해주세요.",
        })
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}