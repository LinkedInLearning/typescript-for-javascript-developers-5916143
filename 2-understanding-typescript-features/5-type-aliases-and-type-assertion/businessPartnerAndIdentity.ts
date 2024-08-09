interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & Identity;

function signContract2(employee: Employee) {
  console.log(`Signed a contract with ${employee.name} (${employee.email}) having credit ${employee.credit}`);
}

const anotherNewEmployee: Employee = {
  name: "Besma",
  credit: 750,
  id: 101,
  email: "besma@example.com"
};

signContract2(anotherNewEmployee);
