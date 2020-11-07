import React from "react";
import { expectAssignable, expectNotAssignable } from "tsd";
import { Option, SelectProps } from ".";

expectAssignable<SelectProps>({ options: [] });
expectNotAssignable<Option>(null);
expectAssignable<Option>({
  value: "value",
  label: "label",
});
expectAssignable<Option>({
  value: "value",
  label: <p>name</p>,
});
