import * as React from "react";
import clsx from "clsx";
import { Button } from "./button";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {},
  forwardedRef
) {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Report
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <Button variant="primary">Create new report</Button>
        </div>
      </div>
    </div>
  );
});