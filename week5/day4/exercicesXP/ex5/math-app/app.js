import _ from "lodash";
import { add, multiply } from "./math.js";

const nums = [2, 4, 6, 8];

console.log("Sum:", add(5, 3));
console.log("Product:", multiply(4, 2));
console.log("Average:", _.mean(nums));
