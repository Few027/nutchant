export interface ReqCustomer {
    firstName: string;
    lastName: string;
    tel: string;
    district: string;
    province: string;
    insurance: string;
}

export interface ResCustomer {
    id: number;
    firstName: string;
    lastName: string;
    tel: string;
    district: string;
    province: string;
    insurance: string;
    updatedAt: string;
    createdAt: string;
}

export interface ReqCustomerInformation {
    perPage: number;
    page: number;
}

export interface ResCustomerInformation {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    customer: ResCustomerInformationCustomer[];
}

export interface ResCustomerInformationCustomer {
    id: number;
    firstName: string;
    lastName: string;
    tel: number;
    district: string;
    province: string;
    insurance: string;
    createdAt: string;
    updatedAt: string;
}

export interface ReqEmployeesOffice {
    firstName: string;
    lastName: string;
    department: string;
    tel: string;
    Email: string;
}

export interface ResEmployeesOffice {
    id: number;
    firstName: string;
    lastName: string;
    department: string;
    tel: string;
    Email: string;
    updatedAt: string;
    createdAt: string;
}

export interface ReqEmployees {
    perPage: number;
    page: number;
}

export interface ResEmployees {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    employees: ResEmployeesEmployee[];
}

export interface ResEmployeesEmployee {
    id: number;
    firstName: string;
    lastName: string;
    department: string;
    tel: number;
    Email: string;
    createdAt: string;
    updatedAt: string;
    levelId: any;
}

export interface ReqSuggestionFrom {
    topic: string;
    project: string;
    particulars: string;
    image: string;
    idCustomer: string;
}

export interface ResSuggestionFrom {
    id: number;
    topic: string;
    project: string;
    particulars: string;
    image: string;
    idCustomer: string;
    updatedAt: string;
    createdAt: string;
}

export interface ReqReport {
    topic: string;
    project: string;
    particulars: string;
    image: string;
    idCustomer: string;
}

export interface ResReport {
    id: number;
    typeForm: number;
    topic: string;
    project: string;
    particulars: string;
    image: string;
    idCustomer: string;
    updatedAt: string;
    createdAt: string;
}

export interface ReqLogin {
    UserName: string;
    password: string;
}

export interface ResLogin {
    id: number;
    UserName: string;
    password: number;
    firstName: string;
    lastName: string;
    tel: any;
    Email: string;
    createdAt: string;
    updatedAt: string;
    categoryId: any;
    insuranceId: any;
    statusId: any;
    form: any;
}

// export interface ResReportShow {
//     id: number;
//     typeForm: number;
//     topic: string;
//     project: string;
//     particulars: string;
//     image: string;
//     idCustomer: number;
//     createdAt: string;
//     updatedAt: string;
// }

