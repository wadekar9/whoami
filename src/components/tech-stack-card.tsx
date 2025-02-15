"use client";

import React, { FC } from "react";
import { Badge } from "./ui/badge";

interface TechStackCardProps {
    title: string;
    stack: readonly string[];
}

const TechStackCard: FC<TechStackCardProps> = ({
    title,
    stack
}) => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="inline-flex font-semibold leading-none text-xs sm:text-sm">{title} : </h3>
            <div className="flex flex-wrap flex-row gap-2 mx-3">
                {stack.map((skill) => <Badge key={skill}>{skill}</Badge>)}
            </div>
        </div>
    )
}

export default TechStackCard