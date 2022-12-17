"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const VoteItem_1 = __importDefault(require("../component/VoteItem"));
const Layout_1 = __importDefault(require("./Layout"));
class Staking {
    constructor() {
        Layout_1.default.current.title = "Staking Play with";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".staking-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("h1", "Staking Play with KLU"), (0, skydapp_browser_1.el)(".interest-container", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("dl", (0, skydapp_browser_1.el)("dt", "스테이킹"), (0, skydapp_browser_1.el)("dd", "55.01%")), (0, skydapp_browser_1.el)("dl", (0, skydapp_browser_1.el)("dt", "드랍스"), (0, skydapp_browser_1.el)("dd", "56.06%")), (0, skydapp_browser_1.el)("dl", (0, skydapp_browser_1.el)("dt", "풀투표"), (0, skydapp_browser_1.el)("dd", "23.93%")), (0, skydapp_browser_1.el)(".how-wrap", (0, skydapp_browser_1.el)("a", "보상 획득 방법 >"))), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("h6", "예상 수익률"), (0, skydapp_browser_1.el)("p", "연 16.88%"), (0, skydapp_browser_1.el)("p", "~"), (0, skydapp_browser_1.el)("p", "연 135.05%")))), (0, skydapp_browser_1.el)(".staking-container", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h6", "스테이킹 수량"), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a.disabled", "언스테이킹"), (0, skydapp_browser_1.el)("a", "스테이킹"))), (0, skydapp_browser_1.el)("content", (0, skydapp_browser_1.el)(".klu-container", (0, skydapp_browser_1.el)("p", "0"), (0, skydapp_browser_1.el)("span", "vKLU")), (0, skydapp_browser_1.el)(".prediction-container", (0, skydapp_browser_1.el)("p", "예상 수익률"), (0, skydapp_browser_1.el)("span", "연 6.74 % ~ 연 53.97 %")))), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h6", "보상 수량"), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a.disabled", "보상 수령"))), (0, skydapp_browser_1.el)("content", (0, skydapp_browser_1.el)(".klu-container", (0, skydapp_browser_1.el)("p", "0"), (0, skydapp_browser_1.el)("span", "vKLU")), (0, skydapp_browser_1.el)(".prediction-container", (0, skydapp_browser_1.el)("p", "누적"), (0, skydapp_browser_1.el)("span", "0 vKLU")))))), (0, skydapp_browser_1.el)("content", (0, skydapp_browser_1.el)(".my-container", (0, skydapp_browser_1.el)(".title-container", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("h6", "보유 투표권"), (0, skydapp_browser_1.el)("p", "투표권 획득 방법")), (0, skydapp_browser_1.el)("span", "0 vKLU")), (0, skydapp_browser_1.el)(".pool-container", (0, skydapp_browser_1.el)("p", "풀 투표 참여 가능"), (0, skydapp_browser_1.el)("span", "0 vKLU"))), (0, skydapp_browser_1.el)(".list-container", (0, skydapp_browser_1.el)("input", { placeholder: "NFT명 검색" }), (0, skydapp_browser_1.el)("hr"), new VoteItem_1.default()))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Staking;
//# sourceMappingURL=Staking.js.map