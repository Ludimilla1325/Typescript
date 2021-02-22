// ---- To get the acess to all the elements (but we r not rendering anything)
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement; // it wont be null (!) and the type will be HTMLTemplateElement
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        
        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach(); // we must add the attach so the code will execute,
    }   

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element) //we gonna insert that after the begining
    }
}

const prjInput = new ProjectInput();