import axios from "axios";

type Employee = {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
};

// Boolean should be regarded as a symbol to the complier
// if this should be regarded as an Employee
function isEmployee(data: any): data is Employee {
  return (
    typeof data.id === "string" &&
    typeof data.employee_name === "string" &&
    typeof data.employee_salary === "string" &&
    typeof data.employee_age === "string" &&
    typeof data.profile_image === "string"
  );
}

function assertIsTypeArray<T>(
  data: any,
  check: (value: any) => value is T
): asserts data is T[] {
  if (!Array.isArray(data)) {
    throw new Error(`Data should be an array ${JSON.stringify(data)}`);
  }
  if (data.some((datum) => !check(datum))) {
    throw new Error(`Mismatch in data expectations ${JSON.stringify(data)}`);
  }
}

export const getEmployees = (): Promise<Employee[]> => {
  return axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => {
      const responseFromAPI = response.data;
      assertIsTypeArray(responseFromAPI, isEmployee);
      return responseFromAPI;
    });
};
