abstract class Department {
    // static can be accessed directly as Department.CompanyName
    static CompanyName: string = "MyCompany";
    // name: string;
    protected employees: string[] = []; // only accessible from inside the class

    // This is shorthand initialization
    constructor(protected readonly id: string, public name: string) {
        // this.name = name;
    }

    // should add implementation forcefully
    abstract describe(): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(`${this.employees.length} Employees`);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    private lastReport: string;
    private static instance: ITDepartment;

    // getter
    get mostRecentReport() {
        if (this.lastReport) return this.lastReport;
        throw new Error("No last report");
    }

    // setter
    set mostRecentReport(report: string) {
        if (!report) throw new Error("Empty report");
        this.lastReport = report;
    }

    // private constructor == singleton
    private constructor(
        id: string,
        public admins: string[],
        reports: string[]
    ) {
        super(id, "IT");
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (ITDepartment.instance) return this.instance;
        return (this.instance = new ITDepartment(
            "d1",
            ["Max"],
            ["r1", "r2", "r3"]
        ));
    }

    describe(): void {
        console.log(`Department (${this.id}): ${this.name}`);
    }
}

const itDept = ITDepartment.getInstance();
// console.log(itDept);
itDept.describe();
itDept.addEmployee("Max");
itDept.addEmployee("Manu");

// itDept.employees[2] = "Anna"; // will cause an error

itDept.printEmployees();

console.log(itDept);

// const accountingCopy = { describe: itDept.describe };
// accountingCopy.describe(); will cause error
