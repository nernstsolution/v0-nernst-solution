export interface Product {
  id: string
  name: string
  category: "test-stand" | "hardware"
  transactionCategory: "cart" | "quote"
  price?: string
  shortDescription: string
  fullDescription: string
  specifications: Record<string, string>
  features: string[]
  images: string[]
  applications: string[]
}

export const products: Record<string, Product> = {
  "600w-pem-test-stand": {
  id: "600w-pem-test-stand",
  name: "600 W PEM Electrolyzer Test Stand",
    category: "test-stand",
    transactionCategory: "quote",
    shortDescription:
      "High-performance test stand for PEM electrolyzer research with advanced control systems and data acquisition.",
    fullDescription:
  "Our 600 W PEM Electrolyzer Test Stand represents the pinnacle of electrolyzer testing technology. Designed for research institutes and industrial R&D departments, this comprehensive system provides precise control and monitoring capabilities for PEM electrolyzer development and characterization. The integrated data acquisition system captures critical performance parameters in real-time, enabling detailed analysis of electrolyzer behavior under various operating conditions.",
    specifications: {
      "Power Rating": "600 W",
      "Voltage Range": "0-6 V DC",
      "Current Range": "0-100 A",
      "Pressure Range": "1-30 bar",
      "Temperature Range": "20-80°C",
      "Flow Rate": "0-300 mL/min",
      "Data Acquisition": "Adjustable rate",
      "Control Interface": "Touch screen + PC software",
      Communication: "Ethernet",
      Dimensions: "20 x 20 x 30 in",
      Weight: "75 kg",
    },
    features: [
      "Advanced process control system",
      "Real-time data logging and analysis",
      "Safety interlocks and emergency shutdown",
      "Automated test sequences",
      "Remote monitoring capabilities",
      "Modular design for easy maintenance",
    ],
  images: ["/images/600w-pem-test-stand-1.png","/images/600w-pem-test-stand-2.png"],
    applications: [
      "PEM electrolyzer development",
      "Performance characterization",
      "Durability testing",
      "Research and development",
      "Quality control testing",
    ],
  },
  "600w-aem-test-stand": {
    id: "600w-aem-test-stand",
    name: "600 W AEM Electrolyzer Test Stand",
    category: "test-stand",
    transactionCategory: "quote",
    shortDescription:
      "Compact AEM electrolyzer test stand with integrated touchscreen interface and precise control capabilities.",
    fullDescription:
      "The 600 W AEM Electrolyzer Test Stand is specifically engineered for anion exchange membrane (AEM) electrolyzer research. This compact yet powerful system offers exceptional precision and control for AEM technology development. The intuitive touchscreen interface provides easy access to all system parameters, while the robust construction ensures reliable operation in demanding research environments.",
    specifications: {
      "Power Rating": "600 W",
      "Voltage Range": "0-6 V DC",
      "Current Range": "0-100 A",
      "Pressure Range": "1-30 bar",
      "Temperature Range": "20-80°C",
      "Flow Rate": "0-300 mL/min",
      "Control Interface": "Touch screen + PC software",
      Communication: "Ethernet",
      Dimensions: "20 x 20 x 26 cm",
      Weight: "70 kg",
    },
    features: [
      "Dedicated AEM electrolyzer optimization",
      "Integrated touchscreen control",
      "Compact footprint design",
      "High-precision sensors",
      "Automated safety systems",
      "Data export capabilities",
      "User-friendly interface",
    ],
    images: ["/images/600w-aem-test-stand-1.png", "/images/600w-aem-test-stand-2.png"],
    applications: [
      "AEM electrolyzer research",
      "Alkaline electrolysis studies",
      "Catalyst development",
      "System optimization",
      "Educational demonstrations",
    ],
  },
  "single-cell-hardware": {
    id: "single-cell-hardware",
    name: "Single Cell Hardware",
    category: "hardware",
    transactionCategory: "cart",
    price: "$4,499",
    shortDescription: "Precision-engineered single cell hardware for electrolyzer research and development.",
    fullDescription:
      "Our Single Cell Hardware represents the gold standard in electrolyzer cell design. Manufactured with precision-machined components and high-grade materials, this hardware enables researchers to conduct detailed single-cell studies with exceptional accuracy and reproducibility. The modular design allows for easy assembly and disassembly, facilitating rapid testing of different membrane electrode assemblies and operating conditions.",
    specifications: {
      "Active Area": "25 cm²",
      "Cell Material": "Titanium Grade 2",
      "Gasket Material": "PTFE/Viton composite",
      "Operating Pressure": "Up to 30 bar",
      "Operating Temperature": "Up to 80°C",
      "Current Density": "Up to 4 A/cm²",
      "Flow Field": "Serpentine design",
      Connections: '1/4" NPT fittings',
      Dimensions: "15 x 15 x 8 cm",
      Weight: "2.5 kg",
    },
    features: [
      "Precision-machined titanium construction",
      "Optimized flow field design",
      "Easy assembly/disassembly",
      "High-temperature compatibility",
      "Corrosion-resistant materials",
      "Standardized connections",
      "Research-grade precision",
    ],
    images: ["/images/single-cell-hardware-1.png","/images/single-cell-hardware-2.png"],
    applications: [
      "Single cell testing",
      "MEA characterization",
      "Performance optimization",
      "Research and development",
      "Educational purposes",
    ],
  },
  "multi-cell-hardware": {
    id: "multi-cell-hardware",
    name: "Multi-cell Hardware",
    category: "hardware",
    transactionCategory: "quote",
    price: "$7,999",
    shortDescription: "Advanced multi-cell stack assembly for high-performance electrolyzer applications.",
    fullDescription:
      "The Multi-cell Hardware system is designed for researchers requiring higher power densities and stack-level performance evaluation. This sophisticated assembly incorporates multiple cells in a compact, efficient design that mimics commercial electrolyzer stacks. The precision-engineered components ensure uniform current distribution and optimal thermal management across all cells.",
    specifications: {
      "Number of Cells": "5 cells",
      "Total Active Area": "125 cm²",
      "Stack Material": "Stainless Steel 316L",
      "End Plates": "Aluminum 6061-T6",
      "Operating Pressure": "Up to 25 bar",
      "Operating Temperature": "Up to 70°C",
      "Current Density": "Up to 3 A/cm²",
      "Compression System": "Hydraulic",
      Dimensions: "20 x 20 x 15 cm",
      Weight: "8.5 kg",
    },
    features: [
      "Multi-cell stack configuration",
      "Uniform current distribution",
      "Integrated thermal management",
      "Hydraulic compression system",
      "Modular cell design",
      "High-performance materials",
      "Industrial-grade construction",
    ],
    images: ["/images/multi-cell-assembly.png"],
    applications: [
      "Stack performance testing",
      "Scale-up studies",
      "System integration",
      "Commercial development",
      "Advanced research",
    ],
  },
  "membrane-electrode-assembly": {
    id: "membrane-electrode-assembly",
    name: "Membrane Electrode Assembly",
    category: "hardware",
    transactionCategory: "cart",
    price: "$199",
    shortDescription: "High-quality membrane electrode assemblies for optimal electrolyzer performance.",
    fullDescription:
      "Our Membrane Electrode Assemblies (MEAs) are manufactured using state-of-the-art processes and premium materials to ensure consistent, high-performance operation. Each MEA undergoes rigorous quality control testing to guarantee optimal electrochemical performance and durability. These assemblies are compatible with both our single-cell and multi-cell hardware systems.",
    specifications: {
      "Membrane Type": "Nafion 115",
      "Membrane Thickness": "180 μm",
      "Catalyst Loading": "1 mg/cm² (anode), 0.4 mg/cm² (cathode)",
      "Active Area": "25 cm²",
      "Operating Temperature": "Up to 80°C",
      "Operating Pressure": "Up to 30 bar",
      "Current Density": "Up to 4 A/cm²",
      Durability: ">1000 hours",
      Storage: "Dry, room temperature",
      "Shelf Life": "12 months",
    },
    features: [
      "Premium Nafion membrane",
      "Optimized catalyst loading",
      "Consistent performance",
      "Long-term durability",
      "Quality-controlled manufacturing",
      "Research-grade specifications",
      "Compatible with standard hardware",
    ],
    images: ["/images/membrane-electrode-assembly-1.jpg","/images/membrane-electrode-assembly-2.jpg"],
    applications: [
      "Electrolyzer testing",
      "Performance evaluation",
      "Research studies",
      "System development",
      "Educational demonstrations",
    ],
  },
}

export function getProduct(id: string): Product | undefined {
  return products[id]
}

export function getAllProducts(): Product[] {
  return Object.values(products)
}

export function getProductsByCategory(category: "test-stand" | "hardware"): Product[] {
  return Object.values(products).filter((product) => product.category === category)
}
