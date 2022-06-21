"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const superagent_1 = __importDefault(require("superagent"));
const ArtPage_1 = __importDefault(require("./view/art/ArtPage"));
const CreateGovernance_1 = __importDefault(require("./view/governance/CreateGovernance"));
const Governance_1 = __importDefault(require("./view/governance/Governance"));
const GovernanceDetail_1 = __importDefault(require("./view/governance/GovernanceDetail"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const LinkWalletToDiscord_1 = __importDefault(require("./view/LinkWalletToDiscord"));
const MetaverseDetail_1 = __importDefault(require("./view/metaverse/MetaverseDetail"));
const MetaversePage_1 = __importDefault(require("./view/metaverse/MetaversePage"));
const NFTDetail_1 = __importDefault(require("./view/pfp/NFTDetail"));
const PFPPage_1 = __importDefault(require("./view/pfp/PFPPage"));
const Staking_1 = __importDefault(require("./view/Staking"));
(async () => {
    skydapp_browser_1.msg.language = skydapp_browser_1.BrowserInfo.language;
    skydapp_browser_1.msg.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skydapp_common_1.SkyRouter.route("**", Layout_1.default);
    skydapp_common_1.SkyRouter.route("", Home_1.default);
    skydapp_common_1.SkyRouter.route("staking", Staking_1.default);
    skydapp_common_1.SkyRouter.route("governance", Governance_1.default);
    skydapp_common_1.SkyRouter.route("governance/create", CreateGovernance_1.default);
    skydapp_common_1.SkyRouter.route("governance/detail/{id}", GovernanceDetail_1.default);
    skydapp_common_1.SkyRouter.route("link-wallet-to-discord", LinkWalletToDiscord_1.default);
    skydapp_common_1.SkyRouter.route("pfp/{addr}", PFPPage_1.default);
    skydapp_common_1.SkyRouter.route("pfp/{addr}/{id}", NFTDetail_1.default);
    skydapp_common_1.SkyRouter.route("arts/{id}", ArtPage_1.default);
    skydapp_common_1.SkyRouter.route("metaverse/{id}/item/{addr}", MetaverseDetail_1.default);
    skydapp_common_1.SkyRouter.route("metaverse/{id}", MetaversePage_1.default);
    if (sessionStorage.__spa_path) {
        skydapp_common_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
//# sourceMappingURL=main.js.map