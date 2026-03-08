import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Slab Calculator — Free Tool for Contractors | EstimateConcrete",
  description:
    "Calculate cubic yards, bags of concrete, material cost, and labor for any slab project. Includes waste factor, rebar estimates, and cost per square foot. Free tool for concrete contractors.",
  keywords:
    "concrete calculator, concrete slab calculator, cubic yards calculator, concrete cost calculator, how much concrete do I need, concrete yard calculator",
};

export default function SlabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
