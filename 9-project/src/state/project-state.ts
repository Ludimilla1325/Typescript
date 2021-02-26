import { Project, ProjectStatus} from '../models/project.js';

// Project State Management
type Listener<T> = (items: T[]) =>void; // we dont care about any value that listener function might return
    
class State<T> { // we have to specify what this state will work with
    protected listeners: Listener<T>[] = []; // protected  - cant be acessed from outisde the class, but can be acessed from any class that inherits

    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }
}

export class ProjectState extends State<Project>{
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
    }

static getInstance() {
    if (this.instance) {
        return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
        );
    this.projects.push(newProject);
    this.updateListeners();
    }

    // Move project from a list to another
    moveProject(projectId: string, newStatus: ProjectStatus){ // which project is to move and which is the new box
        const project = this.projects.find(prj => prj.id === projectId);
        if(project && project.status != newStatus){ // just if change the status, we gonna uodate the listener
            project.status = newStatus;
            this.updateListeners();
        }

    } 

    private updateListeners(){ // to re render, go throught all listers and all will be triggered
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export const projectState = ProjectState.getInstance();

