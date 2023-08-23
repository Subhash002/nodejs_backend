import path from "path";
import * as url from "url";
// Resolving a file path with the current directory
let filePath1 = path.resolve("users/admin", "readme.md");
console.log(filePath1); // /Users/admin/readme.md

// Resolving a file path with multiple segments
let filePath2 = path.resolve("users", "admin", "readme.md");
console.log(filePath2); // /Users/admin/readme.md

// Resolving a file path with an absolute path
let filePath3 = path.resolve("/users/admin", "readme.md");
console.log(filePath3); // /users/admin/readme.md

// URL
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
console.log(__dirname);
