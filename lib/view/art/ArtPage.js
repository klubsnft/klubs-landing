"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArtPage {
    constructor(params) {
        const id = params.id;
        this.init(id);
    }
    init(id) {
        window.location.href = `https://v1.klu.bs/arts/${id}`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = ArtPage;
//# sourceMappingURL=ArtPage.js.map