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

const combinedData = nernst_mea_data.map((nernst, index) => ({
  j: nernst.j,
  "Nernst MEA": nernst.V,
  "NREL Standard MEA": nrel_mea_data[index].V,
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
        <div className="h-96 w-full" style={{ width: "100%", height: "384px" }}>
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
                label={{ value: "Current Density (A/cm²)", position: "insideBottom", offset: -10 }}
                className="text-xs"
              />
              <YAxis
                domain={[1.4, 2.1]}
                label={{ value: "Voltage (V)", angle: -90, position: "insideLeft" }}
                className="text-xs"
              />
              <Tooltip
                formatter={(value: number, name: string) => [`${value.toFixed(3)} V`, name]}
                labelFormatter={(label) => `Current Density: ${label} A/cm²`}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Nernst MEA"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="NREL Standard MEA"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(var(--muted-foreground))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--muted-foreground))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 text-xs text-blue-600">
          Debug: Chart mounted = {isMounted ? "true" : "false"}, Data points = {combinedData.length}
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
