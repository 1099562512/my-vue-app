### 泛型
    在定义函数、接口、类的时候，不预先指定的具体类型，而在使用的时候在去指定类型的一种特征、
  ```ts
    //函数泛型格式如下： 函数方法名<T>(参数): 返回值
    function createArray<T>(length: number, value: T): Array<T> {
      let result: T[] = [];
      for(let i = 0l; i < length; i++ ) {
        result[i] = value
      }
      return result
    }
    createArray<string>(3, 'X') // ['X', 'X', 'X']
  ```