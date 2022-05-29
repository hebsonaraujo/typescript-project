export function date() {
  return function(target:any,propertyKey:string,descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    console.log('===>',originalMethod)
    descriptor.value = function(...args: any[]) {
      console.log(`-----metodo ${propertyKey}`)
      console.log('-----oarams',...args)
      const ret = originalMethod.apply(this,args)
      console.log('-----retorno',ret)
      return ret;

    }


    return descriptor;
  }
}