"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PFPPage {
    constructor(params) {
        const addr = params.addr;
        this.init(addr);
    }
    init(addr) {
        window.location.href = `https://v1.klu.bs/pfp/${addr}`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = PFPPage;
//# sourceMappingURL=PFPPage.js.map