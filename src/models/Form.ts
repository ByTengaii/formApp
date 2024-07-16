import { z, ZodType } from "zod"; // Add new import
import { SpareFormData } from "./";

export type FormProps = {
    navigation: any;
    route?: any;
};

export type Item = {
    id: number;
    name: string;
    title: string;
    type?: string;
};

export type FormData = {
    formId?: string,
    tower: string,
    location: string,
    equipmant: string,
    serialNo: string,
    band: string,
    barCode: string,
    faultDefination: string,
    faultType: string,
    startDay: Date,
    startTime: Date,
    contact: boolean,
    workshopNames: string[] | undefined,
    comingTime: string[],
    identificationTime: string[],
    repairTime: string[],
    waitingTime: string[],
    montageTime: string[],
    spareParts: SpareFormData[],
    careProcedure: boolean,
    detectionBefore: boolean,
    catchFaultProcedure: boolean,
    lastRepairPlan: string,
    lastRepair: string,
    nextRepairPlan: string,
    status: 'notSolved' | 'solved' | 'temporarySolution'
};

export type FormTemplate = {
    ownerId: string;
    formId: string;
    createdAt: Date;
    updatedAt: Date;
    formData: {
        tower: string,
        location: string,
        equipmant: string,
        serialNo: string,
        band: string,
        barCode: string,
        fault: {
            faultDefination: string,
            faultType: string,
            startDay: Date,
            startTime: Date,
        }
        workshop: {
            contact: boolean,
            workshopNames: string[] | undefined,
            comingTime: string[],
            identificationTime: string[],
            repairTime: string[],
            waitingTime: string[],
            montageTime: string[],
        }
        spareParts: SpareFormData[],
        careProcedure: boolean,
        detectionBefore: boolean,
        catchFaultProcedure: boolean,
        lastRepairPlan: string,
        lastRepair: string,
        nextRepairPlan: string,
        status: 'notSolved' | 'solved' | 'temporarySolution'
    },
}

export const FormSchema: ZodType<FormData> = z
    .object({
        formId: z.string().optional(),
        tower: z.string(({ required_error: "Tower is required" })).min(1),
        location: z.string(({ required_error: "Location is required" })).min(1),
        equipmant: z.string(({ required_error: "Equipmant is required" })).min(1),
        serialNo: z.string(({ required_error: "Serial Number is required" })).min(1),
        band: z.string(({ required_error: "Band is required" })).min(1),
        barCode: z.string(({ required_error: "Bar Code is required" })).min(1),
        faultDefination: z.string(({ required_error: "Fault Defination is required" })).min(1),
        faultType: z.string(({ required_error: "Fault Type is required" })).min(1),
        startDay: z.date(({ required_error: "Start Day is required" })),
        startTime: z.date(({ required_error: "Start Time is required" })),
        contact: z.boolean(),
        workshopNames: z.array(z.string()).optional(),
        comingTime: z.array(z.string({ required_error: "Coming Time is required" })),
        identificationTime: z.array(z.string({ required_error: "Identification Time is required" })),
        repairTime: z.array(z.string({ required_error: "Repair Time is required" })),
        waitingTime: z.array(z.string({ required_error: "Waiting Time is required" })),
        montageTime: z.array(z.string({ required_error: "Montage Time is required" })),
        spareParts: z.array(z.object({
            stockCode: z.string({ required_error: "Stock Code is required" }).min(1),
            usedAmount: z.string({ required_error: "Used Amount is required" }).min(1),
            materialDescription: z.string({ required_error: "Material Description is required" }).min(1),
        })),
        careProcedure: z.boolean(),
        detectionBefore: z.boolean(),
        catchFaultProcedure: z.boolean(),
        lastRepairPlan: z.string({ required_error: "Last Repair Plan is required" }).min(1),
        lastRepair: z.string({ required_error: "Last Repair is required" }).min(1),
        nextRepairPlan: z.string({ required_error: "Next Repair Plan is required" }).min(1),
        status: z.enum(['notSolved', 'solved', 'temporarySolution'])
    }).required();

export const FormTemplateSchema: ZodType<FormTemplate> = z.object({
    ownerId: z.string(),
    formId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    formData: z.object({
        tower: z.string(),
        location: z.string(),
        equipmant: z.string(),
        serialNo: z.string(),
        band: z.string(),
        barCode: z.string(),
        fault: z.object({
            faultDefination: z.string(),
            faultType: z.string(),
            startDay: z.date(),
            startTime: z.date(),
        }),
        workshop: z.object({
            contact: z.boolean(),
            workshopNames: z.array(z.string()),
            comingTime: z.array(z.string()),
            identificationTime: z.array(z.string()),
            repairTime: z.array(z.string()),
            waitingTime: z.array(z.string()),
            montageTime: z.array(z.string()),
        }),
        spareParts: z.array(z.object({
            stockCode: z.string(),
            usedAmount: z.string(),
            materialDescription: z.string(),
        })),
        careProcedure: z.boolean(),
        detectionBefore: z.boolean(),
        catchFaultProcedure: z.boolean(),
        lastRepairPlan: z.string(),
        lastRepair: z.string(),
        nextRepairPlan: z.string(),
        status: z.enum(['notSolved', 'solved', 'temporarySolution'])
    }),
});

export type PreviewCardData = {
    formId: string;
    text: string;
    date: string;
    status: 'notSolved' | 'solved' | 'temporarySolution';
}

export  const defaultFormData: Partial<FormData> ={
    tower: '',
    location: '',
    equipmant: '',
    serialNo: '',
    band: '',
    barCode: '',
    faultDefination: '',
    faultType: '',
    startDay: new Date(),
    startTime: new Date(),
    contact: false,
    workshopNames: [],
    comingTime: [],
    identificationTime: [],
    repairTime: [],
    waitingTime: [],
    montageTime: [],
    spareParts: [],
    careProcedure: false,
    detectionBefore: false,
    catchFaultProcedure: false,
    lastRepairPlan: '',
    lastRepair: '',
    nextRepairPlan: '',
    status: 'notSolved'
};