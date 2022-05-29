export function domInjector(selector) {
    return function (target, propertyKey) {
        let element;
        const getter = function () {
            if (!element) {
                console.log('DOM INJ targe', target);
                console.log('DOM INJ prokey', selector, propertyKey);
                console.log('==>DOM', this, propertyKey);
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
        console.log('==>DOMFIM  target', target);
    };
}
