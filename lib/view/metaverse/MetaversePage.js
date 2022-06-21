"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetaversePage {
    constructor(params) {
        const id = parseInt(params.id, 10);
        this.init(id);
    }
    init(id) {
        window.location.href = `https://v1.klu.bs/metaverse/${id}`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = MetaversePage;
//# sourceMappingURL=MetaversePage.js.map