"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NFTDetail {
    constructor(params) {
        const addr = params.addr;
        const id = parseInt(params.id, 10);
        this.init(addr, id);
    }
    init(addr, id) {
        window.location.href = `https://v1.klu.bs/pfp/${addr}/${id}`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = NFTDetail;
//# sourceMappingURL=NFTDetail.js.map