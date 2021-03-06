"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectItem = void 0;
var base_component_1 = __importDefault(require("./base-component"));
var autobind_1 = require("../decorators/autobind");
// ProjectItem Class - class responsible for rendering a single project item.
var ProjectItem = /** @class */ (function (_super) {
    __extends(ProjectItem, _super);
    function ProjectItem(hostId, project) {
        var _this = _super.call(this, 'single-project', hostId, false, project.id) || this;
        _this.project = project;
        _this.configure();
        _this.renderContent();
        return _this;
    }
    Object.defineProperty(ProjectItem.prototype, "persons", {
        get: function () {
            if (this.project.people === 1) {
                return '1 person';
            }
            else {
                return this.project.people + " persons";
            }
        },
        enumerable: false,
        configurable: true
    });
    // methods that only help us to write dragable component or classes in a uniforme way
    ProjectItem.prototype.dragStartHandler = function (event) {
        event.dataTransfer.setData('text/plain', this.project.id); // dataTransfer is special for  drag events (identifies of the format of the data, id of the project)
        event.dataTransfer.effectAllowed = 'move'; // controls hows the cursor will look like and tells the browser our intentions(move)
    };
    ProjectItem.prototype.dragEndHandler = function (_) {
        console.log('DragEnd');
    };
    //Methods
    ProjectItem.prototype.configure = function () {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    };
    ProjectItem.prototype.renderContent = function () {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.persons + ' assigned';
        this.element.querySelector('p').textContent = this.project.description;
    };
    __decorate([
        autobind_1.autobind
    ], ProjectItem.prototype, "dragStartHandler", null);
    return ProjectItem;
}(base_component_1.default));
exports.ProjectItem = ProjectItem;
