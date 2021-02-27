import { DragTarget} from '../models/drag-drop';
import { Project, ProjectStatus } from '../models/project';
import Component from './base-component';
import {autobind} from '../decorators/autobind';
import {ProjectItem} from './project-item';
import {projectState} from '../state/project-state';

    // ProjectList Class
    export class ProjectList extends Component<HTMLDivElement, HTMLElement> 
    implements DragTarget {
        assignedProjects: Project[];


        constructor(private type: 'active' | 'finished') {
            super('project-list', 'app', false, `${type}-projects`);
            this.assignedProjects = [];
        
            this.configure();
            this.renderContent();
        }

        @autobind
        // Drag Events
        dragOverHandler(event: DragEvent) { // change the appearance of the box to know is a place where we can drop
            if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') { //Here we transfer the id,  is the datta attached to our drag event, of that format
            event.preventDefault(); // the default in javascript is not to allow the drop, thats why we must prevent default
                const listEl = this.element.querySelector('ul')!;
                listEl.classList.add('droppable');
            } 
        }

        @autobind
        dropHandler(event: DragEvent) {
            const prfId = event.dataTransfer!.getData('text/plain');
            projectState.moveProject(
                prfId,
                this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
            );
        }

        @autobind 
        dragLeaveHandler(_: DragEvent) { // to remove the background if we really dont drop or move the mouse from it
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
        }

        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);

            projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
            });
        }

        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul')!.id = listId;
            this.element.querySelector('h2')!.textContent =
            this.type.toUpperCase() + ' PROJECTS';
        }

        private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = ''; // we get rid of all list items and then re rend, so whenever we get a new project, we gonna re rend all projects
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem); // id of host / project  -  it will hapen inside of he base class of the component class which project item extends 
        }
        }
    }
