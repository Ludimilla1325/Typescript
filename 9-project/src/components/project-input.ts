import Cmp from './base-component.js'; //you can choose a name here, cuz we put default in the base-components
import * as Validation from '../util/validation.js'; // * to import all the document, but whenever we use something from this document, we must put Validation."the name of method or class we r using from the document"
import { autobind as Autobind} from '../decorators/autobind.js'; //Here u can use the method autobind with the name Autobind, so when wehave many names, we can change
import {projectState} from '../state/project-state.js';
    
    // ProjectInput Class
    export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;
    
        constructor() { // id of template, id of hostelement, new element id
            super('project-input', 'app', true, 'user-input') // true because we want to insert the newly created element at the begging 
            this.titleInputElement = this.element.querySelector(
                '#title'
            ) as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector(
                '#description'
            ) as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector(
                '#people'
            ) as HTMLInputElement;
        this.configure();
        }
    
        configure() { // Quando vamos submit o input
            this.element.addEventListener('submit', this.submitHandler);  
        }

        renderContent(){}

        private gatherUserInput(): [string, string, number] | void {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;
    
        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable: Validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable: Validation.Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };
    
        if (
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable)
        ) {
            alert('Invalid input, please try again!');
                return;
            } else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }
    
        private clearInputs() {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
    
        @Autobind
        private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }
    }
