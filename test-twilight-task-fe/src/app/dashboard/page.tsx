"use client";
import { useLoggedDevicesStore } from "@/stores/loggedDevicesStore";
import { DomaimSkeleton } from "./domainSkeleton";
import { DataTable } from "@/components/ui/data-table";

export default function Page() {
  return (
    <DomaimSkeleton>
      {/* <DataTable columns={} data={}/> */}
    </DomaimSkeleton>
  );
}
