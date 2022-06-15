export class Field{
    title!: string;
    demoTitle!: string;
    type: number = 2;
    description!: string;
    required!: boolean;
    validation!: string; // Enter regex expression to use it in validators.pattern
    displayFormat!: string; // Enter expression to use in pipe ex: number in {{attr | number}} 
                            // or date:"MM/dd/yy" in {{ birthday | date:"MM/dd/yy" }}
    accessLevel!: string;
    typeOptions!: string[]
}