const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let timeout = 0;

for (const spin of spinner) {
  setTimeout(() => {
  process.stdout.write(spin);
  }, timeout);
  timeout += 250;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timeout + 250);

/*setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);*/

