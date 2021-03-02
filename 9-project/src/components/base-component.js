"use strict";
//Component Base Class - abstract cuz people should not instialized but should alqays be used for inheritance
// Genering rending
Object.defineProperty(exports, "__esModule", { value: true });
//default - this is the main, the default export file 
var Component = /** @class */ (function () {
    function Component(templateId, // id of the template
    hostElementId, insertAtStart, // it comes from private attach
    newElementId //its optional, it should always be last cuz people omite them
    ) {
        // --------------
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        // --------------
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId; // thats optional, thats why we must check if we have
        }
        // ----------------
        this.attach(insertAtStart);
    }
    Component.prototype.attach = function (insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    };
    return Component;
}());
exports.default = Component;
