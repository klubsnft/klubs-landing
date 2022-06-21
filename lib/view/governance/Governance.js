"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const ProposalItem_1 = __importDefault(require("../../component/ProposalItem"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class Governance {
    constructor() {
        Layout_1.default.current.title = "Governance Play with";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".governance-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("h1", "Proposal with KLUBS"), (0, skydapp_browser_1.el)("a", "거버넌스 정책 상세보기 >")), (0, skydapp_browser_1.el)(".vote-container", (0, skydapp_browser_1.el)(".klu-container", (0, skydapp_browser_1.el)("h6", "보유 투표권"), (0, skydapp_browser_1.el)("p", "0 vKLU")))), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a", "투표 제안하기", {
            click: () => {
                ViewUtil_1.default.go("/governance/create");
            }
        })), (0, skydapp_browser_1.el)(".list-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h6", "전체 목록"), (0, skydapp_browser_1.el)("a", "전체")), (0, skydapp_browser_1.el)(".item-container", new ProposalItem_1.default())))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Governance;
//# sourceMappingURL=Governance.js.map