/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Tian
 * @Date: 2021-07-16 11:22:50
 * @LastEditors: Tian
 * @LastEditTime: 2021-07-16 15:09:23
 */

export function createElement(type,attributes,...children){
  let element;
  if(typeof type =='string'){
    element = new ElementWrapper(type);
  }else{
    element = new type;
  }
  
  for(let name in attributes){
    element.setAttribute(name,attributes[name]);
  }

  for(let child of children){
    if(typeof child === 'string'){
      child = new TextNodWrapper(child);
    }
    element.appendChild(child);
  }
  return element;
}

export class Component{
  constructor(type){
  }
  setAttribute(name,value){
    this.root.setAttribute(name,value)
  }
  appendChild(child){
    child.mountTo(this.root);
  }
  mountTo(parent){
    parent.appendChild(this.root)
  }
}

class ElementWrapper extends Component{
  constructor(type){
    this.root = document.createElement(type);
  }
}


class TextNodWrapper extends Component{
  constructor(content){
    this.root = document.createTextNode(content);
  } 
}
