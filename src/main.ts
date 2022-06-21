import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import ArtPage from "./view/art/ArtPage";
import CreateGovernance from "./view/governance/CreateGovernance";
import Governance from "./view/governance/Governance";
import GovernanceDetail from "./view/governance/GovernanceDetail";
import Home from "./view/Home";
import Layout from "./view/Layout";
import LinkWalletToDiscord from "./view/LinkWalletToDiscord";
import MetaverseDetail from "./view/metaverse/MetaverseDetail";
import MetaversePage from "./view/metaverse/MetaversePage";
import NFTDetail from "./view/pfp/NFTDetail";
import PFPPage from "./view/pfp/PFPPage";
import Staking from "./view/Staking";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);

    SkyRouter.route("staking", Staking);
    SkyRouter.route("governance", Governance);
    SkyRouter.route("governance/create", CreateGovernance);
    SkyRouter.route("governance/detail/{id}", GovernanceDetail);
    // SkyRouter.route("governance/{id}/update", CreateGovernance);
    SkyRouter.route("link-wallet-to-discord", LinkWalletToDiscord);

    // Temp Redirect
    SkyRouter.route("pfp/{addr}", PFPPage);
    SkyRouter.route("pfp/{addr}/{id}", NFTDetail);
    SkyRouter.route("arts/{id}", ArtPage);
    SkyRouter.route("metaverse/{id}/item/{addr}", MetaverseDetail);
    SkyRouter.route("metaverse/{id}", MetaversePage);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();