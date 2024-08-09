type TechEmployee = {
  id: number;
  name: string;
  position: string;
};

let employeeData: any = {
  id: 1,
  name: "Nick Smits",
  position: "Developer"
};

// Use type assertion to treat employeeData as Employee type
let employee = employeeData as TechEmployee;
console.log(employee.name);  // Outputs: Nick Smits
