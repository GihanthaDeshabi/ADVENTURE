import React from "react";

interface FeatureTileProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureTile({ title, description, icon }: FeatureTileProps) {
  return (
    <div className="group rounded-md border border-neutral-800 bg-black/40 px-4 py-5 flex flex-col gap-2 hover:bg-white/5 hover:border-peach-100/40 transition-all duration-300">
      {icon && (
        <div className="text-peach-100 mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
      )}
      <h3 className="text-sm md:text-base font-dm-sans text-neutral-100 group-hover:text-peach-100 transition-colors">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-neutral-400 leading-relaxed tracking-wider">
        {description}
      </p>
    </div>
  );
}