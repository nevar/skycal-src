export function notObserve(object, name, value, writable = false) {
    Object.defineProperty(object, name,
        { value: value
        , configurable: true, enumerable: false, writable: writable
        });
}
