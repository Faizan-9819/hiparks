"use client";
import React from "react";

/**
 * Reusable Grade A vs Non-Compliant comparison table.
 *
 * Props:
 *  title        – table heading (string)
 *  col1Header   – left comparison column header (default "GRADE A COMPLIANT")
 *  col2Header   – right comparison column header (default "GRADE B/C NON-COMPLIANT")
 *  rows         – array of { category, col1, col2, categoryColor? }
 *                 category      – row label (left coloured cell)
 *                 col1          – compliant description (string)
 *                 col2          – non-compliant description (string)
 *                 categoryColor – tailwind bg class (default "bg-[#f47920]"), cycles through defaults if omitted
 */

const DEFAULT_COLORS = [
  "bg-[#f47920]",
  "bg-[#8f53a1]",
  "bg-[#0db14b]",
  "bg-[#939598]",
];

const ComplianceTable = ({
  title,
  col1Header = "GRADE A COMPLIANT",
  col2Header = "GRADE B/C NON-COMPLIANT",
  rows = [],
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[640px]">
        {title && (
          <p className="bw-sb text-[16px] sm:text-[20px] uppercase text-center py-4 sm:py-5 px-4 border border-[#d0d0d0] border-b-0 tracking-wide">
            {title}
          </p>
        )}
        <table className="w-full border-collapse border border-[#d0d0d0] text-left">
          <thead>
            <tr>
              <th className="w-[33%] border border-[#d0d0d0] p-0" />
              <th className="w-[33%] border border-[#d0d0d0] px-5 py-4 bw-sb text-[16px] sm:text-[20px] uppercase text-center text-black">
                {col1Header}
              </th>
              <th className="w-[33%] border border-[#d0d0d0] px-5 py-4 bw-sb text-[16px] sm:text-[20px] uppercase text-center text-black">
                {col2Header}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const bgColor =
                row.categoryColor || DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
              return (
                <tr key={idx}>
                  <td
                    className={`border border-[#d0d0d0] px-5 py-5 bw-sb text-[16px] sm:text-[20px] uppercase text-white ${bgColor}`}
                  >
                    {row.category}
                  </td>
                  <td className="border border-[#d0d0d0] px-5 py-5 bw-r text-[15px] sm:text-[18px] text-[#4a4a4a] bg-white">
                    {row.col1}
                  </td>
                  <td className="border border-[#d0d0d0] px-5 py-5 bw-r text-[15px] sm:text-[18px] text-[#4a4a4a] bg-white">
                    {row.col2}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplianceTable;
