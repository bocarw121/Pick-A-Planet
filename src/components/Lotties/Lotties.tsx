'use client';
import Lottie from 'lottie-react';
import React from 'react';

type LottiesProps = {
  animationData: any;
  className?: string;
  loop?: boolean;
};

export const Lotties = ({
  animationData,
  className,
  loop = true,
}: LottiesProps) => {
  return (
    <Lottie animationData={animationData} loop={loop} className={className} />
  );
};
