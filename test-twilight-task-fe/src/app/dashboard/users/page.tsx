"use client";
import { useLoggedDevicesStore } from "@/stores/loggedDevicesStore";

import MainSign from "@/components/ui/main-sign";

import { DomaimSkeleton } from "../domainSkeleton";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import { getRandomHexColor } from "@/helpers/helpers";
import { aggregationFns } from "@tanstack/react-table";

export default function Page() {
  const { aggregateDataForMalWare, aggregateDataForOs, aggregateDataForStealer, aggregateDataForDateOfInfection } =
    useLoggedDevicesStore();
  const aggregatedDevicesMalware = aggregateDataForMalWare();
  const aggregatedDevicesOs = aggregateDataForOs();
  const aggregatedDevicesInfected = aggregateDataForDateOfInfection();
  const aggregatedDevicesStealerr = aggregateDataForStealer();

  const chartConfig = {
    desktop: {
      label: "Desktop",

      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <DomaimSkeleton>
      <div className="h-full w-full px-8 py-6">
        <MainSign>
          <MainSign.Main>All Users data</MainSign.Main>
        </MainSign>
        <div className="grid grid-cols-1 py-4 md:grid-cols-[1fr_1fr_1fr]">
          <div className="flex flex-col items-center gap-4">
            <span className="font-[700]">Most used OS</span>
            <ChartContainer config={chartConfig} className="min-h-[200px]">
              <PieChart>
                <Pie data={aggregatedDevicesOs} dataKey="value" nameKey="name">
                  {aggregatedDevicesOs.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={getRandomHexColor()} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[700]">Most used Malware</span>
            <ChartContainer config={chartConfig} className="min-h-[200px]">
              <PieChart>
                <Pie data={aggregatedDevicesMalware} dataKey="value" nameKey="name">
                  {aggregatedDevicesMalware.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={getRandomHexColor()} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[700]">Most used Stealer Type</span>
            <ChartContainer config={chartConfig} className="min-h-[200px]">
              <PieChart>
                <Pie data={aggregatedDevicesStealerr} dataKey="value" nameKey="name">
                  {aggregatedDevicesStealerr.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={getRandomHexColor()} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[700]">Infected Devices Timeline</span>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={aggregatedDevicesInfected} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </DomaimSkeleton>
  );
}
