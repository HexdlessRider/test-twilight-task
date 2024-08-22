"use client";
import { useLoggedDevicesStore } from "@/stores/loggedDevicesStore";
import { DomaimSkeleton } from "./domainSkeleton";
import { DataTable } from "@/components/ui/data-table";
import { ICredentials, IDevice, ILoggedDevice } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import MainSign from "@/components/ui/main-sign";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function Page() {
  const { loggedDevices } = useLoggedDevicesStore();
  const columns: ColumnDef<ILoggedDevice>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "log_checksum",
      header: "Log Checksum",
    },
    {
      accessorKey: "log_file_name",
      header: "Log File Name",
    },
    {
      accessorKey: "stealer_type",
      header: "Stealer Type",
    },
    {
      accessorKey: "computer_information",
      header: "Computer Information",
      cell: ({ row }) => {
        const device: IDevice = row.original.computer_information;
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"}>Show Details</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>
                <span className="font-extrabold"> Build ID: </span>
                {device.build_id}
              </p>
              <p>
                <span className="font-extrabold"> Infection Date: </span>
                {device.infection_date}
              </p>
              <p>
                <span className="font-extrabold"> IP: </span>
                {device.ip}
              </p>
              <p>
                <span className="font-extrabold"> Malware Name: </span>
                {device.malware_path.split("\\").pop()}
              </p>
              <p>
                <span className="font-extrabold"> Username: </span>
                {device.username}
              </p>
              <p>
                <span className="font-extrabold"> Country: </span>
                {device.country}
              </p>
              <p>
                <span className="font-extrabold"> OS: </span>
                {device.os}
              </p>
              <p>
                <span className="font-extrabold"> HWID: </span>
                {device.hwid}
              </p>
            </PopoverContent>
          </Popover>
        );
      },
    },
    {
      accessorKey: "credentials",
      header: "Credentials",

      cell: ({ row }) => {
        const credentials: ICredentials[] = row.original.credentials;
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"}>Show Details</Button>
            </PopoverTrigger>
            <PopoverContent>
              {credentials.map((cred, index) => (
                <div className="flex flex-col gap-4" key={index}>
                  <span className="font-[700]">
                    Url: <span className="font-[400]">{cred.url}</span>
                  </span>
                  <div className="border-y-2">
                    {cred.creds.map((c, i) => (
                      <span key={i}>
                        Username: {c.username}, Password: {c.password}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        );
      },
    },
  ];

  return (
    <DomaimSkeleton>
      <div className="h-full w-full px-8 py-6">
        <MainSign>
          <MainSign.Main>All Devices Table</MainSign.Main>
        </MainSign>
        <DataTable columns={columns} data={loggedDevices} />
      </div>
    </DomaimSkeleton>
  );
}
