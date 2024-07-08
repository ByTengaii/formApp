import { z, ZodType } from "zod"; // Add new import
import { SpareFormData } from "./SpareModel";

export type FormProps= {
    navigation: any;
    index:{
        activeIndex: number;
        setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    }
};

export type Item = {
    id: number;
    name: string;
    title: string;
    type?: string;
};

export type FormData = {
    tower: string,
    location: string,
    equipmant: string,
    serialNo: string,
    band: string,
    barCode: string,
    faultDefination: string,
    faultType: string,
    faultTime: {
        startDay: Date
        startTime: Date
    },
    workshop: undefined | {
        contact: boolean,
        workshopNames: string[] | undefined,
        comingTime: string,
        identificationTime: string,
        repairTime: string,
        waitingTime: string,
        montageTime: string,
    }
    spareParts: undefined | SpareFormData,
    careProcedure: boolean,
    detectionBefore: boolean,
    lastRepairPlan: Date
    lastRepair: Date
    nextRepairPlan: Date
    status: 'notSolved' | 'solved' | 'temporarySolution'
};

/*
export const FormSchema: ZodType<FormData> = z
    .object({
        tower: z.string(({ required_error: "Tower is required" })).min(1),
        location: z.string(({ required_error: "Location is required" })).min(1),
        equipmant: z.string(({ required_error: "Equipmant is required" })).min(1),
        serialNo: z.string(({ required_error: "Serial Number is required" })).min(1),
        band: z.string(({ required_error: "Band is required" })).min(1),
        barCode: z.string(({ required_error: "Bar Code is required" })).min(1),
        faultDefination: z.string(({ required_error: "Fault Defination is required" })).min(1),
        faultType: z.string(({ required_error: "Fault Type is required" })).min(1),
        faultTime: z.object({
            startDay: z.date(({ required_error: "Start Day is required" })),
            startTime: z.date(({ required_error: "Start Time is required" })),
        }).required(),
        workshop: z.object({
            contact: z.boolean(),
            workshopNames: z.array(z.string()),
            comingTime: z.date(),
            repairTime: z.date(),
        }).optional(),
        spareParts: z.object({
            stockCode: z.string(),
            usedAmount: z.number(),
            materialDescription: z.string(),
        }).optional(),
        careProcedure: z.boolean(),
        detectionBefore: z.boolean(),
        lastRepairPlan: z.date(),
        lastRepair: z.date(),
        nextRepairPlan: z.date(),
        status: z.enum(['notSolved', 'solved', 'temporarySolution'])
    }).required();
*

/*ownerId: UID
formId : ID
createdAt: Date
updatedAt: Date

---------------------
title: string
tower: String
location: String
equipmant: String
serialNo: String
band: String
barCode: String
faultDefination: String
faultType: String
faultTime : {
    startDay : Date
    startTime : Hour{date}
}
workshop : undefined | {
    contact : boolean
    workhopNames : [] | undefined
    comingTime :
    identificationTime:
    repairTime:
    montageTime:
    
}
spareParts : undefined | {
    tpic: string
    amount : number
    defination : string
}
careProcedure: boolean
detectionBefore : boolean
lastRepairPlan: date
lastRepair : date
nextRepairPlan: date
status: notSolved | solved | temporarySolution | request
*/

