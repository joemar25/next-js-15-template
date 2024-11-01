"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src\lib\faker\data\seed.ts
var fs = require("fs");
var path = require("path");
var faker_1 = require("@faker-js/faker");
var data_1 = require("./data");
var documents = Array.from({ length: 100 }, function () {
    return ({
        id: "TASK-".concat(faker_1.faker.number.int({ min: 1000, max: 9999 })),
        code: faker_1.faker.string.alphanumeric(10),
        qr: Array.from({ length: 2 }, function () { return faker_1.faker.string.alphanumeric(10); }),
        title: faker_1.faker.hacker.phrase().replace(/^./, function (letter) { return letter.toUpperCase(); }),
        classification: faker_1.faker.helpers.arrayElement(data_1.categories).value,
        type: faker_1.faker.helpers.arrayElement(data_1.types).value,
        created_by: faker_1.faker.name.firstName() + " " + faker_1.faker.name.lastName(),
        date_created: faker_1.faker.date.recent({ days: 30 }).toISOString(),
        origin_office: faker_1.faker.helpers.arrayElement(data_1.origin_offices).value,
        status: faker_1.faker.helpers.arrayElement(data_1.statuses).value,
    });
});
fs.writeFileSync(path.join(__dirname, "documents.json"), JSON.stringify(documents, null, 2));
console.log("✅ documents data generated.");
/**
 * mar note:
 *
 * > Compile the script with `tsc seed.ts`.
 * > Run the compiled script with `node seed.js`.
 */
