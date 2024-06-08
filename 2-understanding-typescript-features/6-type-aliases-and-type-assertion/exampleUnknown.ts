let uncertainValue: unknown = "Hello, TypeScript";

if (typeof uncertainValue === "string") {
  console.log(uncertainValue.toUpperCase());  // Safe to use as string
}

// Type assertion can also be used
let lengthOfString: number = (uncertainValue as string).length; 
