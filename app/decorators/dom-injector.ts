export function domInjector (selector : string) : any {
  return function (target: any, propertyKey: string) {
    
    // this[`${propertyKey}`] = document.querySelector(selector) as HTMLInputElement;
    let element: HTMLElement;
    const getter = function() {
      if(!element) {
        console.log('DOM INJ targe',target)
        console.log('DOM INJ prokey',selector,propertyKey)
        console.log('==>DOM',this,propertyKey)
        element = <HTMLElement>document.querySelector(selector);
      }
      return element
    }
    //insere no get do element
    Object.defineProperty(
      target,
      propertyKey,
      {get : getter}
    )
    console.log('==>DOMFIM  target',target)


  }


}