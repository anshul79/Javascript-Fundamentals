// We have two identical DOM trees, A and B. For DOM tree A, we have 
// the location of an element. Create a function to find to find that same element
// in DOM tree B.

function reversePath(element, root) {
    let path = [];
    let pointer = element;
    while(pointer != root) {
        path.push(pointer.parent.children.indexOf(pointer));
        pointer = pointer.parent;
    }
    
    pointer = root; // the second DOM tree
    let i = 0;
    while(i < path.length) {
        pointer = pointer.children[path[i]];
        i++;
    }
    return pointer;
}
