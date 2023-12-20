import { HomePage } from "../source/scrappers/homePage";

console.time("HomePage")
let home = await HomePage();
console.log(home)
console.timeEnd("HomePage")
