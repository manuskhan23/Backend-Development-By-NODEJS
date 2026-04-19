import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const rootDir = path.join(path.dirname(__filename), "..");

export default rootDir;