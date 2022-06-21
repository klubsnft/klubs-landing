"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("./Layout"));
class Home {
    constructor() {
        Layout_1.default.current.title = "Meet Connect Play with";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".home-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)(".logo-container", (0, skydapp_browser_1.el)("img", { src: "/images/shared/logo/klubs.svg", alt: "klubs" }), (0, skydapp_browser_1.el)("p", "2.0")), (0, skydapp_browser_1.el)("p", "Coming Soon!"), (0, skydapp_browser_1.el)("a", "Go to V1", { href: "https://v1.klu.bs/" }))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map