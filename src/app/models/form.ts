import { Field } from "./field";

export class Form{
    id?: number;
    title!: string;
    type: number = 2; // 1 for predefined form and 2 for created form
    fields: Field[] = [];
}