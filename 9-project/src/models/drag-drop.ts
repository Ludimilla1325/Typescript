// Drag & Drop Interfaces
namespace App {
    export interface Draggable { // any class that render elements tjat can be drangable
        dragStartHandler(event: DragEvent): void; // listener that listen to start of that drag event
        dragEndHandler(event:DragEvent): void; // listener listen to the end of event
    }
    export interface DragTarget {
            dragOverHandler(event: DragEvent): void; // its to singer the broeser that the thing u r dragging something over is a valid drag targe(if you dont do correct, dropping wont be possible)
            dropHandler(event: DragEvent): void; // drop handler to react the actual drop that happens if the overHandler permit, so it will handle the drop and update our data
            dragLeaveHandler(event: DragEvent): void; // to give visual feedback to the user, for example change background
    
        }
}

// exports make avaiable outside of this file