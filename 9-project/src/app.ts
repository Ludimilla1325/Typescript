//autobind decorator
function autobind(
    _:any, 
    _2: string,  // _ when u r aware u wont use this arguments
    descriptor: PropertyDescriptor
) {
    const orginalMethod = descriptor.value; // we store the method we origin defined
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get(){ //should be executed when we try to acess the function
            const boundFn = orginalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}


//Project Input Class
// ---- To get the acess to all the elements (but we r not rendering anything)
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    
    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement; // it wont be null (!) and the type will be HTMLTemplateElement
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        
        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        // ---- form element
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';
       
        // to get acess in the elements
       this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
       this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
       this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

       this.configure();
        this.attach(); // we must add the attach so the code will execute,
    }   

    //Listener to our form

    @autobind
    private submitHandler(event: Event){ //receive an event object
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }

    private configure(){
        this.element.addEventListener('submit', this.submitHandler); // bind is to pre configure how this function is going to execute, the first argument is what is the "this" keyword will refer to
    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element) //we gonna insert that after the begining
    }
}

const prjInput = new ProjectInput();