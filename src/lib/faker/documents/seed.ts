// src\lib\faker\data\seed.ts
import * as fs from "fs";
import * as path from "path";
import { faker } from "@faker-js/faker";

import { categories, types, origin_offices, statuses } from "./data";

const documents = Array.from({ length: 100 }, () => ({
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    code: faker.string.alphanumeric(10),
    qr: Array.from({ length: 2 }, () => faker.string.alphanumeric(10)),
    title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
    category: faker.helpers.arrayElement(categories).value,
    type: faker.helpers.arrayElement(types).value,
    created_by: faker.name.firstName() + " " + faker.name.lastName(),
    date_created: faker.date.recent({ days: 30 }).toISOString(),
    origin_office: faker.helpers.arrayElement(origin_offices).value,
    status: faker.helpers.arrayElement(statuses).value,
}));

fs.writeFileSync(
    path.join(__dirname, "documents.json"),
    JSON.stringify(documents, null, 2)
);

console.log("✅ documents data generated.");

/**
 * mar note:
 * 
 * > Compile the script with `tsc seed.ts`.
 * > Run the compiled script with `node seed.js`.
 */