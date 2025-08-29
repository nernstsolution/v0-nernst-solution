"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useEffect, useState } from "react"

const nernst_mea_data = [
  { j: 0.1, V: 1.453 },
  { j: 0.5, V: 1.542 },
  { j: 1.0, V: 1.617 },
  { j: 2.0, V: 1.754 },
  { j: 3.0, V: 1.868 },
  { j: 4.0, V: 1.987 },
]

const nrel_mea_data = [
  { j: 0.1, V: 1.479 },
  { j: 0.5, V: 1.56 },
  { j: 1.0, V: 1.633 },
  { j: 2.0, V: 1.763 },
  { j: 3.0, V: 1.886 },
  { j: 4.0, V: 2.005 },
]


const nernst_mea_irfree_data = [
  { j: 0.1, V: 1.451 },
  { j: 0.5, V: 1.529 },
  { j: 1.0, V: 1.592 },
  { j: 2.0, V: 1.704 },
  { j: 3.0, V: 1.793 },
  { j: 4.0, V: 1.887 },
]

const nrel_mea_irfree_data = [
  { j: 0.1, V: 1.477 },
  { j: 0.5, V: 1.548 },
  { j: 1.0, V: 1.608 },
  { j: 2.0, V: 1.713 },
  { j: 3.0, V: 1.811 },
  { j: 4.0, V: 1.905 },
]

const combinedData = nernst_mea_data.map((nernst, index) => ({
  j: nernst.j,
  "Nernst MEA": nernst.V,
  "NREL Standard MEA": nrel_mea_data[index].V,
}))

const combinedIRFreeData = nernst_mea_irfree_data.map((nernst, index) => ({
  j: nernst.j,
  "Nernst MEA (IR Free)": nernst.V,
  "NREL Standard MEA (IR Free)": nrel_mea_irfree_data[index].V,
}))

export function MEAPerformanceChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    console.log("[v0] MEA Performance Chart component mounted")
    console.log("[v0] Combined data:", combinedData)
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    console.log("[v0] Chart not yet mounted, showing loading state")
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-sans">Performance Comparison</CardTitle>
          <p className="text-sm text-muted-foreground">Loading chart...</p>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full flex items-center justify-center">
            <p>Loading performance chart...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  console.log("[v0] Rendering chart with mounted state")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans">Performance Comparison</CardTitle>
        <p className="text-sm text-muted-foreground">
          Polarization curve comparison between Nernst MEA and NREL standard MEA
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Chart 1: Standard Polarization Curve */}
          <div className="h-96 w-full md:w-1/2" style={{ minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={combinedData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis
                  dataKey="j"
                  type="number"
                  domain={[0, 4.5]}
                  interval={0}
                  tickCount={10}
                  tickFormatter={(value) => value.toFixed(1)}
                  tick={{ fontSize: 12 }}
                  label={{ value: "Current Density (A/cm²)", position: "insideBottom", offset: -10 }}
                  className="text-xs"
                  ticks={[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5]}
                />
                <YAxis
                  domain={[1.2, 2.2]}
                  type="number"
                  label={{ value: "Voltage (V)", angle: -90, position: "insideLeft" }}
                  className="text-xs"
                />
                <Tooltip
                  formatter={(value: number, name: string) => [`${value.toFixed(3)} V`, name]}
                  labelFormatter={(label) => `Current Density: ${label} A/cm²`}
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Legend
                  verticalAlign="top"
                  align="left"
                  iconType="circle"
                  wrapperStyle={{
                    padding: 8,
                    borderRadius: 8,
                    background: "transparent",
                    fontSize: 13,
                    top: 10,
                    left: 10,
                    minWidth: 120,
                    minHeight: 40,
                    position: "absolute",
                    // width and height are dynamic based on content
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="Nernst MEA"
                  stroke="#5b90b3"
                  strokeWidth={3}
                  dot={{ fill: "#5b90b3", stroke: "#fff", strokeWidth: 1, r: 5 }}
                  activeDot={{ r: 7, stroke: "#5b90b3", strokeWidth: 2 }}
                  connectNulls={true}
                />
                <Line
                  type="monotone"
                  dataKey="NREL Standard MEA"
                  stroke="#f8b98b"
                  strokeWidth={3}
                  dot={{ fill: "#f8b98b", stroke: "#fff", strokeWidth: 1, r: 5 }}
                  activeDot={{ r: 7, stroke: "#f8b98b", strokeWidth: 2 }}
                  connectNulls={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
      
          {/* Chart 2: IR-Free Polarization Curve */}
          <div className="h-96 w-full md:w-1/2" style={{ minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={combinedIRFreeData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis
                  dataKey="j"
                  type="number"
                  domain={[0, 4.5]}
                  interval={0}
                  tickCount={10}
                  tickFormatter={(value) => value.toFixed(1)}
                  tick={{ fontSize: 12 }}
                  label={{ value: "Current Density (A/cm²)", position: "insideBottom", offset: -10 }}
                  className="text-xs"
                  ticks={[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5]}
                />
                <YAxis
                  domain={[1.2, 2.2]}
                  type="number"
                  label={{ value: "Voltage (V)", angle: -90, position: "insideLeft" }}
                  className="text-xs"
                />
                <Tooltip
                  formatter={(value: number, name: string) => [`${value.toFixed(3)} V`, name]}
                  labelFormatter={(label) => `Current Density: ${label} A/cm²`}
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Legend
                  verticalAlign="top"
                  align="left"
                  iconType="circle"
                  wrapperStyle={{
                    padding: 8,
                    borderRadius: 8,
                    background: "transparent",
                    fontSize: 13,
                    top: 10,
                    left: 10,
                    minWidth: 120,
                    minHeight: 40,
                    position: "absolute",
                    // width and height are dynamic based on content
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="Nernst MEA (IR Free)"
                  stroke="#5b90b3"
                  strokeWidth={3}
                  dot={{ fill: "#5b90b3", stroke: "#fff", strokeWidth: 1, r: 5 }}
                  activeDot={{ r: 7, stroke: "#5b90b3", strokeWidth: 2 }}
                  connectNulls={true}
                />
                <Line
                  type="monotone"
                  dataKey="NREL Standard MEA (IR Free)"
                  stroke="#f8b98b"
                  strokeWidth={3}
                  dot={{ fill: "#f8b98b", stroke: "#fff", strokeWidth: 1, r: 5 }}
                  activeDot={{ r: 7, stroke: "#f8b98b", strokeWidth: 2 }}
                  connectNulls={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground space-y-1">
          <p>
            <strong>Test Conditions:</strong>
          </p>
          <p>• Active area: 25 cm²</p>
          <p>• Temperature: 80°C</p>
          <p>• Pressure: Ambient</p>
        </div>
      </CardContent>
    </Card>
  )
}
