/* eslint-disable no-undef */
import { sum } from "../sum";


test("sum of number ", ()=>{
    const res = sum(3,5);
    expect(res).toBe(8);
});