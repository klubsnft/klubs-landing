"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editorjs_1 = __importDefault(require("@editorjs/editorjs"));
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class CreateGovernance {
    constructor() {
        Layout_1.default.current.title = "Governance Play with";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".create-governance-view", (0, skydapp_browser_1.el)("a", "< Back", {
            click: () => {
                ViewUtil_1.default.go("/governance");
            }
        }), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h1", "Propose a vote"), (0, skydapp_browser_1.el)("h6", "유의사항"), (0, skydapp_browser_1.el)("ul", (0, skydapp_browser_1.el)("li", "제출된 거버넌스 제안은 수정 또는 취소할 수 없습니다. 최종 제출 전 반드시 내역을 확인 후 등록해주세요.")), (0, skydapp_browser_1.el)("a", "거버넌스 정책 상세보기")), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".klu-container", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("h6", "보유 KLU"), (0, skydapp_browser_1.el)(".amount-container", (0, skydapp_browser_1.el)("p", "0 KLU"), (0, skydapp_browser_1.el)("span", "등록 비용 500 KLU"))), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("h6", "보유 투표권"), (0, skydapp_browser_1.el)(".amount-container", (0, skydapp_browser_1.el)("p", "0 vKLU (0%)"), (0, skydapp_browser_1.el)("span", "최소 보유 투표권 | 300,000 vKLU")))), (0, skydapp_browser_1.el)("input", { placeholder: "제목" }), (0, skydapp_browser_1.el)("", { id: "editorjs" }), (0, skydapp_browser_1.el)("a", "제안서 제출")))));
        this.init();
    }
    init() {
        new editorjs_1.default({
            placeholder: "제안을 설명해주세요.",
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = CreateGovernance;
//# sourceMappingURL=CreateGovernance.js.map