"use strict";
/// <reference path = "base-component.ts"/>
/// <reference path = "../decorators/autobind.ts" />
/// <reference path = "../util/validation.ts" />
/// <reference path = "../state/project-state.ts" />
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
    // ProjectInput Class
    var ProjectInput = /** @class */ (function (_super) {
        __extends(ProjectInput, _super);
        function ProjectInput() {
            var _this = _super.call(this, 'project-input', 'app', true, 'user-input') // true because we want to insert the newly created element at the begging 
             || this;
            _this.titleInputElement = _this.element.querySelector('#title');
            _this.descriptionInputElement = _this.element.querySelector('#description');
            _this.peopleInputElement = _this.element.querySelector('#people');
            _this.configure();
            return _this;
        }
        ProjectInput.prototype.configure = function () {
            this.element.addEventListener('submit', this.submitHandler);
        };
        ProjectInput.prototype.renderContent = function () { };
        ProjectInput.prototype.gatherUserInput = function () {
            var enteredTitle = this.titleInputElement.value;
            var enteredDescription = this.descriptionInputElement.value;
            var enteredPeople = this.peopleInputElement.value;
            var titleValidatable = {
                value: enteredTitle,
                required: true
            };
            var descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5
            };
            var peopleValidatable = {
                value: +enteredPeople,
                required: true,
                min: 1,
                max: 5
            };
            if (!App.validate(titleValidatable) ||
                !App.validate(descriptionValidatable) ||
                !App.validate(peopleValidatable)) {
                alert('Invalid input, please try again!');
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        };
        ProjectInput.prototype.clearInputs = function () {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        };
        ProjectInput.prototype.submitHandler = function (event) {
            event.preventDefault();
            var userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                var title = userInput[0], desc = userInput[1], people = userInput[2];
                App.projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        };
        __decorate([
            App.autobind
        ], ProjectInput.prototype, "submitHandler", null);
        return ProjectInput;
    }(App.Component));
    App.ProjectInput = ProjectInput;
})(App || (App = {}));
