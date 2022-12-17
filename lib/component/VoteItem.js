"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class VoteItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".vote-item");
        this.append((0, skydapp_browser_1.el)("img", { src: "/images/shared/img/nft-mock.png", alt: "nft" }), (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("h6", "가이아 크로노스"), (0, skydapp_browser_1.el)("p", "Gaia Kronos")), (0, skydapp_browser_1.el)(".earn-container", (0, skydapp_browser_1.el)("p", "Earn up to"), (0, skydapp_browser_1.el)("span", "23.86%")), (0, skydapp_browser_1.el)("a", "투표하기"));
    }
}
exports.default = VoteItem;
//# sourceMappingURL=VoteItem.js.map