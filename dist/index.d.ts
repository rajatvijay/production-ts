import React from "react";
declare type Option = {
    value: string;
    label: React.ReactNode | string;
};
declare type SelectProps = {
    options: Option[];
};
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export { Select, SelectProps, Option };
