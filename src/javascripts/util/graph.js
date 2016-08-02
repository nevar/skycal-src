import {notObserve} from './notObserve.js';

export const ___ = 0;
export const __P = 1;
export const _S_ = 2;
export const S__ = 4;
export const S_P = 5;
export const SS_ = 6;
export const SSP = 7;

export function node
    (id, x, y, flags, need, give, title, description, nodeImage)
{
    let data = {open: false, hover: false, want: false};
    notObserve(data, 'id', id);
    notObserve(data, 'need', need);
    notObserve(data, 'give', give);
    notObserve(data, 'flags', flags);
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
    return node;
}

export function pNode
    (id, x, y, flags, need, give, title, description, nodeImage)
{
    let n = node(id, x, y, flags, need, give, title, description, nodeImage);
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
