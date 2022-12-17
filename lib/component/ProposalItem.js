"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class GovernanceItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".proposal-item");
        this.append((0, skydapp_browser_1.el)(".subject-container", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("p", "1"), (0, skydapp_browser_1.el)("h6", "가이아프로토콜 레벨 (A) 유지")), (0, skydapp_browser_1.el)("label", "진행")), (0, skydapp_browser_1.el)(".detail-container", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("p", "투표 기간"), (0, skydapp_browser_1.el)("h6", "22.04.21 ~ 22.04.25")), (0, skydapp_browser_1.el)("label", "미참여")));
    }
}
exports.default = GovernanceItem;
//# sourceMappingURL=ProposalItem.js.map