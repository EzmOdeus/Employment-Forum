import React from "react";

const logos = [
  {
    id: 1,
    src: "/WhatsApp Image 2025-05-06 at 4.32.53 PM.jpeg",
    alt: "Logo 1",
  },
  {
    id: 2,
    src: "/WhatsApp Image 2025-05-06 at 4.32.54 PM (1).jpeg",
    alt: "Logo 2",
  },
  {
    id: 3,
    src: "/WhatsApp Image 2025-05-06 at 4.32.54 PM (2).jpeg",
    alt: "Logo 3",
  },
  {
    id: 4,
    src: "/WhatsApp Image 2025-05-06 at 4.32.54 PM (3).jpeg",
    alt: "Logo 4",
  },
  {
    id: 5,
    src: "/WhatsApp Image 2025-05-06 at 4.32.54 PM (4).jpeg",
    alt: "Logo 5",
  },
  {
    id: 6,
    src: "/WhatsApp Image 2025-05-06 at 4.32.54 PM.jpeg",
    alt: "Logo 6",
  },
  {
    id: 7,
    src: "/WhatsApp Image 2025-05-06 at 4.32.55 PM (1).jpeg",
    alt: "Logo 7",
  },
  {
    id: 8,
    src: "/WhatsApp Image 2025-05-06 at 4.32.55 PM (2).jpeg",
    alt: "Logo 8",
  },
  {
    id: 9,
    src: "/WhatsApp Image 2025-05-06 at 4.32.55 PM (3).jpeg",
    alt: "Logo 9",
  },
  {
    id: 10,
    src: "/WhatsApp Image 2025-05-06 at 4.32.55 PM (4).jpeg",
    alt: "Logo 10",
  },
  {
    id: 11,
    src: "/WhatsApp Image 2025-05-06 at 4.32.55 PM (5).jpeg",
    alt: "Logo 11",
  },
  {
    id: 12,
    src: "/WhatsApp Image 2025-05-06 at 4.32.55 PM (6).jpeg",
    alt: "Logo 12",
  },
  {
    id: 13,
    src: "/WhatsApp Image 2025-05-06 at 4.32.55 PM.jpeg",
    alt: "Logo 13",
  },
  {
    id: 14,
    src: "/WhatsApp Image 2025-05-06 at 4.32.56 PM (1).jpeg",
    alt: "Logo 14",
  },
  {
    id: 15,
    src: "/WhatsApp Image 2025-05-06 at 4.32.56 PM (2).jpeg",
    alt: "Logo 15",
  },
  {
    id: 16,
    src: "/WhatsApp Image 2025-05-06 at 4.32.56 PM (3).jpeg",
    alt: "Logo 16",
  },
  {
    id: 17,
    src: "/WhatsApp Image 2025-05-06 at 4.32.56 PM (4).jpeg",
    alt: "Logo 17",
  },
  {
    id: 18,
    src: "/WhatsApp Image 2025-05-06 at 4.32.56 PM (5).jpeg",
    alt: "Logo 18",
  },
  {
    id: 19,
    src: "/WhatsApp Image 2025-05-06 at 4.32.56 PM.jpeg",
    alt: "Logo 19",
  },
  {
    id: 20,
    src: "/WhatsApp Image 2025-05-06 at 4.32.59 PM (1).jpeg",
    alt: "Logo 20",
  },
  {
    id: 21,
    src: "/WhatsApp Image 2025-05-06 at 4.32.59 PM.jpeg",
    alt: "Logo 21",
  },
  {
    id: 22,
    src: "/WhatsApp Image 2025-05-06 at 4.33.00 PM (1).jpeg",
    alt: "Logo 22",
  },
  {
    id: 23,
    src: "/WhatsApp Image 2025-05-06 at 4.33.00 PM (2).jpeg",
    alt: "Logo 23",
  },
  {
    id: 24,
    src: "/WhatsApp Image 2025-05-06 at 4.33.00 PM.jpeg",
    alt: "Logo 24",
  },
  {
    id: 25,
    src: "/WhatsApp Image 2025-05-06 at 4.33.02 PM.jpeg",
    alt: "Logo 25",
  },
  {
    id: 26,
    src: "/WhatsApp Image 2025-05-06 at 4.38.03 PM.jpeg",
    alt: "Logo 26",
  },
  {
    id: 27,
    src: "/WhatsApp Image 2025-05-06 at 6.06.38 PM.jpeg",
    alt: "Logo 27",
  },
  {
    id: 28,
    src: "/WhatsApp Image 2025-05-06 at 4.38.07 PM.jpeg",
    alt: "Logo 28",
  },
  {
    id: 29,
    src: "/WhatsApp Image 2025-05-06 at 4.33.06 PM.jpeg",
    alt: "Logo 29",
  },
  {
    id: 30,
    src: "/WhatsApp Image 2025-05-06 at 4.38.03 PM (1).jpeg",
    alt: "Logo 30",
  },
];


const LogoGrid: React.FC = () => {
    return (
      <div style={styles.grid} id="companies">
        {logos.map((logo) => (
          <div key={logo.id} style={styles.logoContainer}>
            <img src={logo.src} alt={logo.alt} style={styles.logo} />
          </div>
        ))}
      </div>
    );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: "16px",
    padding: "16px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    padding: "8px",
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
    padding: "5px",
    
  },
};

export default LogoGrid;