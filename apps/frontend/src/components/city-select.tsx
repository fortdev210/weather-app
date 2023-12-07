import Select from "react-select";
import clsx from "clsx";

import { AVAILABLE_CITIES } from "../utils/constants";
import { useState } from "react";

const styles = {
  base: "",
};

interface CitySelectProps {
  /**
   * Classname
   */
  className?: string;

  /**
   * onChange
   */
  onChange: (v: string | undefined) => void;
}

export const CitySelect: React.FC<CitySelectProps> = ({
  className,
  onChange,
}) => {
  return (
    <div className={clsx(styles.base, className)}>
      <Select
        options={AVAILABLE_CITIES}
        onChange={(v) => onChange(v?.value)}
        className='w-80'
      />
    </div>
  );
};
