"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetaverseDetail {
    constructor(params) {
        const addr = params.addr;
        const id = parseInt(params.id, 10);
        this.init(addr, id);
    }
    init(addr, id) {
        window.location.href = `https://v1.klu.bs/metaverse/${id}/item/${addr}`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = MetaverseDetail;
//# sourceMappingURL=MetaverseDetail.js.map