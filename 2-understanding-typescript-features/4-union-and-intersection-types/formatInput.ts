function formatInput(input: string | number) {
  if (typeof input === 'string') {
    console.log(input.toLowerCase());
  } else {
    console.log(input.toFixed(2));
  }
}

formatInput('Hello, TypeScript');  // Outputs: hello, typescript
formatInput(42.9845);                // Outputs: 42.98
