import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Calculator = () => {
  const [search, setSearch] = useSearchParams();

  //   console.log("Search params: " + search);
  //   console.log(search.get("op"));

  // useEffect(() => {

  // }, []);
  useEffect(() => {
    demo();
  }, [search]);

  function demo() {
    const num1 = search.get("num1");
    const num2 = search.get("num2");
    const op = search.get("op");
    var res;
    if (op === "+") {
      res = parseInt(num1) + parseInt(num2);
    }
    setSearch(() => res);
  }

  return (
    <div>
      Your calculation Result is <span id="calc-result">{search}</span>
    </div>
  );
};
