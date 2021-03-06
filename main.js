/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Tian
 * @Date: 2021-07-13 17:48:01
 * @LastEditors: Tian
 * @LastEditTime: 2021-07-16 15:28:22
 */

import {Component, createElement} from './frameWork.js';

class Carousel extends Component{
  constructor(){
    super();
    this.attributes = Object.create(null);
  }
  setAttribute(name,value){
    this.attributes[name] =value;
  }
  render(){
    this.root = document.createElement("div");
    this.root.classList.add('carousel');
    for(let record of this.attributes.src){
      let child = document.createElement('div');
      child.style.backgroundImage = `url(${record})`;
      this.root.appendChild(child);
    }
    return this.root;
  }
  mountTo(parent){
    parent.appendChild(this.render());
  }
}

let d = [
  "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
  "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
  "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
  "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"
  ]

let a = <Carousel src={d}/>


// document.body.appendChild(a);
a.mountTo(document.body);