import React from "react";

export function model<K extends string>(
    getter: string, 
    setter: React.Dispatch<React.SetStateAction<string>>, 
    key: K
): {
    onChange(e: React.ChangeEvent): void;
} & Record<K, string>;

export function factory(trash: typeof React.createElement): typeof React.createElement;