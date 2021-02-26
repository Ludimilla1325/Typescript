import { Draggable} from '../models/drag-drop.js';
import { Project } from '../models/project.js';
import Component from './base-component.js';
import {autobind} from '../decorators/autobind.js';

    // ProjectItem Class - class responsible for rendering a single project item.
    export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> 
    implements Draggable{
    private project: Project;
    
    get persons(){
        if (this.project.people === 1){
            return '1 person';
        } else {
            return `${this.project.people} persons`
        }
    }

    constructor(hostId: string, project: Project){
        super('single-project', hostId, false,project.id); // the id i want forward to the base class constructor
        this.project = project;

        this.configure();
        this.renderContent();
    }

    @autobind
    // methods that only help us to write dragable component or classes in a uniforme way
    dragStartHandler(event: DragEvent) {
        event.dataTransfer!.setData('text/plain', this.project.id); // dataTransfer is special for  drag events (identifies of the format of the data, id of the project)
        event.dataTransfer!.effectAllowed = 'move'; // controls hows the cursor will look like and tells the browser our intentions(move)
    }
    
    dragEndHandler(_: DragEvent){ // we r not using it
        console.log('DragEnd');
    }

    //Methods
    configure() {
        this.element. addEventListener('dragstart', this.dragStartHandler);
        this.element. addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
        this.element.querySelector('p')!.textContent = this.project.description;
    }
}
