import fs from "fs";
import { htmlStatement, statement } from "./statement.js";

const invoiceData = JSON.parse(await fs.readFileSync("./01/invoice.json"));
const playsData = JSON.parse(await fs.readFileSync("./01/plays.json"));
console.log(statement(invoiceData, playsData));
console.log(htmlStatement(invoiceData, playsData));
