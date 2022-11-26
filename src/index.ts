// 基础理解
type T = { delay: 'one'; message: 'two' };
type K = keyof T; // T的key组成的联合类型 delay | message
type V = T[K]; // 'one' | 'two'
interface Person {
  name: string;
  age: number;
  gender: string;
}
class Teacher {
  constructor(public info: Person) {}

  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({ name: 'zl', age: 18, gender: '男' });
const res = teacher.getInfo('age');
console.log(res,'res');

