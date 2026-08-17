import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: "dark" | "light" | "dynamic";
}

export default function Logo({ className = "", size = 44, textColor = "dynamic" }: LogoProps) {
  // Center is 100, 100 in our viewBox coordinate system.
  // We'll generate a scalloped circle path with quadratic bezier curves
  const cx = 100;
  const cy = 100;
  const outerR = 96;
  const innerR = 90;
  const peaks = 36;

  let scallopPath = "";
  for (let i = 0; i < peaks; i++) {
    const angle1 = (i * 2 * Math.PI) / peaks;
    const angle2 = ((i + 0.5) * 2 * Math.PI) / peaks;
    const angle3 = ((i + 1) * 2 * Math.PI) / peaks;

    const x1 = cx + outerR * Math.cos(angle1);
    const y1 = cy + outerR * Math.sin(angle1);
    const x2 = cx + innerR * Math.cos(angle2);
    const y2 = cy + innerR * Math.sin(angle2);
    const x3 = cx + outerR * Math.cos(angle3);
    const y3 = cy + outerR * Math.sin(angle3);

    if (i === 0) {
      scallopPath += `M ${x1} ${y1}`;
    }
    scallopPath += ` Q ${x2} ${y2} ${x3} ${y3}`;
  }
  scallopPath += " Z";

  // Select colors depending on context
  const mainBlue = "#072a4b";
  const lightBg = "#ffffff";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`inline-block select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scalloped outer seal shape */}
      <path
        d={scallopPath}
        fill={mainBlue}
        className="transition-colors duration-300"
      />

      {/* Internal white spacer circle */}
      <circle cx="100" cy="100" r="82" fill={lightBg} />

      {/* Internal dark blue concentric tracking ring */}
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke={mainBlue}
        strokeWidth="3"
        className="opacity-95"
      />

      <circle
        cx="100"
        cy="100"
        r="73"
        fill="none"
        stroke={mainBlue}
        strokeWidth="1.5"
        className="opacity-70"
      />

      {/* Subtle appliance outlines inside inner background to match the original logo perfectly */}
      <g className="opacity-10 pointer-events-none fill-none stroke-[#072a4b] stroke-[1.5]">
        {/* Refrigerator symbol on left */}
        <rect x="58" y="75" width="22" height="42" rx="2" />
        <line x1="58" y1="94" x2="80" y2="94" />
        <line x1="74" y1="84" x2="74" y2="90" />
        <line x1="74" y1="100" x2="74" y2="108" />

        {/* Washing machine on right */}
        <rect x="118.5" y="80" width="23" height="37" rx="2" strokeWidth="1.5" />
        <circle cx="130" cy="101" r="7.5" strokeWidth="1.5" />
        <line x1="120" y1="88" x2="140" y2="88" />
        <circle cx="123" cy="84" r="1" fill="#072a4b" />
        <circle cx="126" cy="84" r="1" fill="#072a4b" />

        {/* Chimney symbol at the top center */}
        <path d="M 88 56 L 112 56 L 112 70 L 126 78 L 74 78 L 88 70 Z" />
      </g>

      {/* CORE TEXTUAL IDENTITIES */}
      {/* UCC Centerpiece Header */}
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontSize="44"
        fontWeight="900"
        fontFamily='"Space Grotesk", "Inter", sans-serif'
        fill={mainBlue}
        className="tracking-tighter font-extrabold"
      >
        UCC
      </text>

      {/* Inner circular label - UNIQUE COOLING CENTER */}
      <text
        x="100"
        y="138"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="800"
        fontFamily='"Inter", sans-serif'
        letterSpacing="0.4"
        fill={mainBlue}
        className="uppercase"
      >
        UNIQUE COOLING CENTER
      </text>

      {/* Core temporal established date anchor - EST. 2014 */}
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily='"JetBrains Mono", monospace'
        letterSpacing="2"
        fill={mainBlue}
        className="uppercase"
      >
        EST. 2014
      </text>
    </svg>
  );
}
