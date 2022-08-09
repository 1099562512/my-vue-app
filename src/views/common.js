import { ref } from 'vue'
class Person {
  _count = 0
  constructor(name = '张三', age = 23) {
    this.name = name
    this.age = age
  }
  get prop() {}  //取值函数
  set prop(val) {}//存值函数

  //可以初始化参数的单例模式
  static getInstance(name, age) {
   if(!Person.instance) Person.instance = new Person(name, age)
   return Person.instance
  }
  getName() {
    return this.name
  }
  getCount() {
    return this._count
  }
}
export default new Person()  //单例模式
export const person = Person 