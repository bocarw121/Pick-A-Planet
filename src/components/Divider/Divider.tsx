import React from 'react';

interface DividerProps {}

export function Divider({}: DividerProps) {
  return (
    <div className="divider w-[70%] sm:w-[55%] md:w-[50%] lg:w-[32rem] xl:w-[34rem]  mx-auto"></div>
  );
}
