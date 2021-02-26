"use strict";
/// <reference path = "base-component.ts"/>
/// <reference path = "../decorators/autobind.ts" />
/// <reference path = "../state//project-state.ts" />
/// <reference path = "../models/project.ts" />
/// <reference path = "../models/drag-drop.ts" />
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
var App;
(function (App) {
    // ProjectList Class
    var ProjectList = /** @class */ (function (_super) {
        __extends(ProjectList, _super);
        function ProjectList(type) {
            var _this = _super.call(this, 'project-list', 'app', false, type + "-projects") || this;
            _this.type = type;
            _this.assignedProjects = [];
            _this.configure();
            _this.renderContent();
            return _this;
        }
        // Drag Events
        ProjectList.prototype.dragOverHandler = function (event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') { //Here we transfer the id,  is the datta attached to our drag event, of that format
                event.preventDefault(); // the default in javascript is not to allow the drop, thats why we must prevent default
                var listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        };
        ProjectList.prototype.dropHandler = function (event) {
            var prfId = event.dataTransfer.getData('text/plain');
            App.projectState.moveProject(prfId, this.type === 'active' ? App.ProjectStatus.Active : App.ProjectStatus.Finished);
        };
        ProjectList.prototype.dragLeaveHandler = function (_) {
            var listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        };
        ProjectList.prototype.configure = function () {
            var _this = this;
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            App.projectState.addListener(function (projects) {
                var relevantProjects = projects.filter(function (prj) {
                    if (_this.type === 'active') {
                        return prj.status === App.ProjectStatus.Active;
                    }
                    return prj.status === App.ProjectStatus.Finished;
                });
                _this.assignedProjects = relevantProjects;
                _this.renderProjects();
            });
        };
        ProjectList.prototype.renderContent = function () {
            var listId = this.type + "-projects-list";
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent =
                this.type.toUpperCase() + ' PROJECTS';
        };
        ProjectList.prototype.renderProjects = function () {
            var listEl = document.getElementById(this.type + "-projects-list");
            listEl.innerHTML = ''; // we get rid of all list items and then re rend, so whenever we get a new project, we gonna re rend all projects
            for (var _i = 0, _a = this.assignedProjects; _i < _a.length; _i++) {
                var prjItem = _a[_i];
                new App.ProjectItem(this.element.querySelector('ul').id, prjItem); // id of host / project  -  it will hapen inside of he base class of the component class which project item extends 
            }
        };
        __decorate([
            App.autobind
        ], ProjectList.prototype, "dragOverHandler", null);
        __decorate([
            App.autobind
        ], ProjectList.prototype, "dropHandler", null);
        __decorate([
            App.autobind
        ], ProjectList.prototype, "dragLeaveHandler", null);
        return ProjectList;
    }(App.Component));
    App.ProjectList = ProjectList;
})(App || (App = {}));
