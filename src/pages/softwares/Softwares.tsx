// import React from "react";
// import "./softwares.css"; // Import the scoped CSS file

// interface LogoItem {
//   id: number;
//   name: string;
//   imagePath: string;
//   alt: string;
// }

// export const Softwares: React.FC = () => {
//   const logos: LogoItem[] = [
//     {
//       id: 1,
//       name: "Autocad",
//       imagePath: "../public/autocad.png",
//       alt: "Autocad",
//     },
//     {
//       id: 2,
//       name: "Civil 3D",
//       imagePath: "../public/civil3d.jpeg",
//       alt: "Civil 3D",
//     },
//     {
//       id: 3,
//       name: "Epanet",
//       imagePath: "../public/epanet.png",
//       alt: "Epanet",
//     },
//     {
//       id: 4,
//       name: "HecRas",
//       imagePath: "../public/hecras.jpeg",
//       alt: "HecRas",
//     },
//     {
//       id: 5,
//       name: "Revit",
//       imagePath: "../public/revit.png",
//       alt: "Revit",
//     },
//   ];

//   // Duplicate logos for seamless infinite scroll
//   const duplicatedLogos = [...logos, ...logos];

//   return (
//     <div className="logo-carousel-container">
//       <h2 className="logo-carousel-title">Software We Use</h2>
//       <div className="logo-carousel-wrapper">
//         <div className="logo-carousel-track">
//           {duplicatedLogos.map((logo, index) => (
//             <div key={`${logo.id}-${index}`} className="logo-carousel-item">
//               <img
//                 src={logo.imagePath}
//                 alt={logo.alt}
//                 className="logo-carousel-image"
//               />
//               <span className="logo-carousel-name">{logo.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import "./softwares.css"; // Import the scoped CSS file

interface LogoItem {
  id: number;
  name: string;
  imagePath: string;
  alt: string;
}

export const Softwares: React.FC = () => {
  const logos: LogoItem[] = [
    {
      id: 1,
      name: "Autocad",
      imagePath: "autocad.png",
      alt: "Autocad",
    },
    {
      id: 2,
      name: "Civil 3D",
      imagePath: "civil3d.jpeg",
      alt: "Civil 3D",
    },
    {
      id: 3,
      name: "Epanet",
      imagePath: "epanet.png",
      alt: "Epanet",
    },
    {
      id: 4,
      name: "HecRas",
      imagePath: "hecras.jpeg",
      alt: "HecRas",
    },
    {
      id: 5,
      name: "Revit",
      imagePath: "revit.png",
      alt: "Revit",
    },
  ];

  // Triple the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-carousel-container">
      <h2 className="logo-carousel-title">Software We Use</h2>
      <div className="logo-carousel-wrapper">
        <div className="logo-carousel-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-carousel-item">
              <img
                src={logo.imagePath}
                alt={logo.alt}
                className="logo-carousel-image"
              />
              <span className="logo-carousel-name">{logo.name}</span>
            </div>
          ))}
        </div>
        {/* Cave effect overlays */}
        <div className="logo-carousel-fade-left"></div>
        <div className="logo-carousel-fade-right"></div>
      </div>
    </div>
  );
};
