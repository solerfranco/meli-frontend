import React from "react";
import "../styles/scss/CategoryBreadcrums.scss";

interface CategoryBreadcrumsProps {
  categories: Array<string>;
}

const CategoryBreadcrums = (props: CategoryBreadcrumsProps) => {
  return (
    <div className="breadcrum-container">
      {props?.categories?.map((result: string, index: number) => (
        <span
          key={index}
          className={
            index === props.categories.length - 1 ? "breadcrum-bold" : ""
          }
        >
          {result}
          {index !== props.categories.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

export default CategoryBreadcrums;
