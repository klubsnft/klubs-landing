import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import CreateGovernance from "./view/Governance/CreateGovernance";
import Governance from "./view/Governance/Governance";
import GovernanceDetail from "./view/Governance/GovernanceDetail";
import Home from "./view/Home";
import Layout from "./view/Layout";
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

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();