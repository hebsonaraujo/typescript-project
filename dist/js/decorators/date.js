export function date() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        console.log('===>', originalMethod);
        descriptor.value = function (...args) {
            console.log(`-----metodo ${propertyKey}`);
            console.log('-----oarams', ...args);
            const ret = originalMethod.apply(this, args);
            console.log('-----retorno', ret);
            return ret;
        };
        return descriptor;
    };
}
