import { useState } from "react";

export const useList = (init: number[]) => {
  let [list, setList] = useState(init);

  const push = () => {
    if (list.length === 0) {
      setList([1]);
    } else {
      let temp: number[] = [...list];
      temp.push(list.length + 1);
      setList(temp);
    }
  };

  const pop = () => {
    let temp: number[] = [...list];
    temp.pop();
    setList(temp);
  };

  const clear = () => {
    setList([]);
  };

  const reset = () => {
    setList(init);
  };

  const map = (el: any) => {
    // console.log(el)
    let temp: number[] = [...list];
    let r: number[] = temp.map((el) => (el*2))
    // console.log(r)
    setList(r);
  };

  return [list, { push, pop, clear, reset, map }];
};