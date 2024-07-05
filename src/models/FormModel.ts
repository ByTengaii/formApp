import { z, ZodType } from "zod"; // Add new import
import { SpareFormData } from "./SpareModel";

export type FormProps= {
    navigation: any;
    index:{
        activeIndex: number;
        setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    }
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
        workhopNames: string[] | undefined,
        comingTime: Date,
        repairTime:Date,
    }
    spareParts: undefined | SpareFormData,
    careProcedure: boolean,
    detectionBefore: boolean,
    lastRepairPlan: Date
    lastRepair: Date
    nextRepairPlan: Date
    status: 'notSolved' | 'solved' | 'temporarySolution'
};




export type ValidFieldNames =
    | "stockCode"
    | "usedAmount"
    | "materialDescription";

export const SpareSchema: ZodType<SpareFormData> = z
    .object({
        stockCode: z.string({
            required_error: "Stock is required",
        }).min(1),
        usedAmount: z
            .string({
                required_error: "required field",
            })
            .min(1)
            .max(10),
        materialDescription: z
            .string({
                required_error: "Material Description is required",
            }).min(1),

    });

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

