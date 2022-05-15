import React from "react";

export function model(
    getter: string, 
    setter: React.Dispatch<React.SetStateAction<string>>, 
    key?: string
): {
    onChange(e: React.ChangeEvent): void;
};