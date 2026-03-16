/*********************
 * File: FeatureList.tsx
 * Description: FeatureList component
 * This component helps to render SectionThree
 * i.e. it takes the list data as prop and displays it in a three-column layout
 ********************/

import React from "react";

type FeatureItem = {
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
  icon?: React.ElementType;
  iconClass?: string;
  iconSize?: number;
};

const FeatureList: React.FC<{ listData: FeatureItem[] }> = ({ listData }) => {
  return (
    <div className="mx-auto mt-0 flex max-w-[1400px] flex-col space-y-24 md:flex-row md:flex-wrap md:justify-center md:space-y-0 md:gap-x-20 md:gap-y-30 xl:gap-x-16">
      {listData.map(
        (
          {
            title,
            description,
            titleClass,
            descriptionClass,
            icon: Icon,
            iconClass,
            iconSize,
          },
          idx,
        ) => (
          <div
            key={title ?? idx}
            className={`max-w-[300px] text-center text-lg min-[1400px]:max-w-[400px] md:mx-auto md:w-1/2 md:px-4 xl:w-1/3 xl:px-2 ${titleClass ?? ""}`}
          >
            {Icon && (
              <div
                className={`mx-auto ${iconClass ?? ""}`}
                style={{ fontSize: iconSize ?? undefined }}
              >
                <Icon className={iconClass} size={iconSize} strokeWidth={0.4} />
              </div>
            )}
            <h2 className="mt-6 mb-8 text-3xl font-bold md:mb-12 md:text-3xl xl:text-[2.00rem]">
              {title}
            </h2>
            <p
              className={`mt-3 text-[1.10rem] leading-6 font-normal text-black md:text-base md:leading-6 xl:px-4 xl:text-[1.20rem] xl:leading-[1.85rem] xl:font-normal ${descriptionClass ?? ""}`}
            >
              {description}
            </p>
          </div>
        ),
      )}
    </div>
  );
};

export default FeatureList;
