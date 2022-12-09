import * as React from "react";
import clsx from "clsx";

export interface TextAreaProps extends React.ComponentPropsWithoutRef<"div"> {}

export const TextArea = React.forwardRef<HTMLDivElement, TextAreaProps>(
  function TextArea({}, forwadedref) {
    return (
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Add your comment
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={""}
          />
        </div>
      </div>
    );
  }
);