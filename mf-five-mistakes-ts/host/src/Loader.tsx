import React, { FC, useState, useEffect } from "react";
import azureLogo from "./images/azure.png";
import spinner from "./images/spinner.png";

export interface LoaderProps {
  logo?: string;
  alt?: string;
}

export const Loader: FC<LoaderProps> = ({ logo, alt }) => {
  const defaultLogo = logo ?? spinner;

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <img src={defaultLogo} alt={"logo" || alt} />
    </div>
  );
};
