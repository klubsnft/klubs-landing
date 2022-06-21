"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editorjs_1 = __importDefault(require("@editorjs/editorjs"));
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class GovernanceDetail {
    constructor() {
        Layout_1.default.current.title = "Governance Play with";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".governance-detail-view", (0, skydapp_browser_1.el)("a", "< Back", {
            click: () => {
                ViewUtil_1.default.go("/governance");
            }
        }), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h1", "가이아프로토콜 레벨 (A) 유지"), (0, skydapp_browser_1.el)(".date", "투표 기간 | 2022-04-13 ~ 2022-04-15")), (0, skydapp_browser_1.el)(".klu-container", (0, skydapp_browser_1.el)("h6", "내가 보유한 vKLU"), (0, skydapp_browser_1.el)("p", "0 vKLU")))), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".vote-container", (0, skydapp_browser_1.el)("section.agree-container", (0, skydapp_browser_1.el)("h6", "찬성"), (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)("p.amount", "55,579,148 vKLU"), (0, skydapp_browser_1.el)("p.percent", "94.70%")), (0, skydapp_browser_1.el)(".bottom", (0, skydapp_browser_1.el)(".percent_bar"))), (0, skydapp_browser_1.el)("section.opposition-container", (0, skydapp_browser_1.el)("h6", "반대"), (0, skydapp_browser_1.el)(".top", (0, skydapp_browser_1.el)("p.amount", "3,111,311 vKLU"), (0, skydapp_browser_1.el)("p.percent", "5.30%")), (0, skydapp_browser_1.el)(".bottom", (0, skydapp_browser_1.el)(".percent_bar")))), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("h6", "코드 세부 정보"), (0, skydapp_browser_1.el)("p", "Governor.delayDelistingTime(0xD676e57Ca65b827fEb112AD81Ff738E7B6c1048d)"), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("h6", "제목"), (0, skydapp_browser_1.el)("", { id: "editorjs" }), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("h6", "상세정보"), (0, skydapp_browser_1.el)(".detail-list", (0, skydapp_browser_1.el)(".list-item", (0, skydapp_browser_1.el)("span.title", "투표 시작 블록"), (0, skydapp_browser_1.el)("span", "87911048")))))));
        this.init();
    }
    init() {
        new editorjs_1.default({
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
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = GovernanceDetail;
//# sourceMappingURL=GovernanceDetail.js.map