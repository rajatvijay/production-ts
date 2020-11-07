declare type FieldType = "single_select" | "checkbox";
declare class UnreachableError extends Error {
    constructor(val: never, message: string);
}
declare function getFieldCmpStr(fieldType: FieldType): UnreachableError | "Select" | "Checkbox";
