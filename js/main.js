import { add as binAdd } from "./bin_addition.js";
import { add as hexAdd } from "./hex_addition.js";

let type = prompt("Addition type ('bin' for binary; 'hex' for hexadecimal):");
if (type == "bin") {
    alert(binAdd());
} else if (type == "hex") {
    alert(hexAdd());
} else {
    alert("Invalid addition type.");
}