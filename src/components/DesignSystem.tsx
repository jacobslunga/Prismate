import { FC } from "react";
import { DesignSystemGrid } from "./DesignSystemGrid";

interface DesignSystemProps {}

import React from "react";

const DesignSystem: FC<DesignSystemProps> = ({}) => {
  return (
    <div className="w-full h-full">
      <DesignSystemGrid />
    </div>
  );
};

export default DesignSystem;
