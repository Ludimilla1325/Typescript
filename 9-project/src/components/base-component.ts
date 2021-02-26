    //Component Base Class - abstract cuz people should not instialized but should alqays be used for inheritance
    // Genering rending
    
    //default - this is the main, the default export file 
    export default abstract class Component<T extends HTMLElement, U extends HTMLElement>{
        templateElement: HTMLTemplateElement;
        hostElement: T;
        element: U;

        constructor(
            templateId: string, // id of the template
            hostElementId: string, 
            insertAtStart: boolean, // it comes from private attach
            newElementId?: string //its optional, it should always be last cuz people omite them
        ) {
            // --------------
            this.templateElement = document.getElementById(
                templateId
            )! as HTMLTemplateElement;
            this.hostElement = document.getElementById(hostElementId)! as T;

            // --------------

            const importedNode = document.importNode(
                this.templateElement.content,
                true
            );
            this.element = importedNode.firstElementChild as U;
            if (newElementId){
                this.element.id = newElementId; // thats optional, thats why we must check if we have
            }
        
            // ----------------

            this.attach(insertAtStart);
        }
        private attach(insertAtBeginning: boolean) {
            this.hostElement.insertAdjacentElement(
                insertAtBeginning ? 'afterbegin' : 'beforeend', 
                this.element
            );
        }
        // ------- Add two methods------- The concret content and configuration needs to happen in the place where we inherit it
        abstract configure(): void;
        abstract renderContent():void;
        }
