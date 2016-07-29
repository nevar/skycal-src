import {notObserve} from './notObserve.js';

export function node
    (id, need, give, x, y, classes, title, description, nodeImage)
{
    let data = {open: false, hover: false, want: false};
    notObserve(data, 'id', id);
    notObserve(data, 'need', need);
    notObserve(data, 'give', give);
    if (title) {
        notObserve(data, 'title', title);
    }
    if (description) {
        notObserve(data, 'description', description);
    }
    if (nodeImage) {
        notObserve(data, 'nodeImage', nodeImage);
    }
    let node = {data: data};
    notObserve(node, 'position', {x: x, y: y});
    notObserve(node, 'classes', classes);
    return node;
}

export function pNode(id, need, give, x, y, classes, title, description, nodeImage) {
    let n = node(id, need, give, x, y, classes, title, description, nodeImage);
    n.data.polish = 0;
    return n;
}

export function edge (source, target, classes = '') {

    let data = {open: false, hover: false, want: false};
    notObserve(data, 'source', source);
    notObserve(data, 'target', target);
    let edge = {data: data};
    notObserve(edge, 'classes', classes);
    return edge;
}
