"use client";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Columns3Icon } from "lucide-react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import { camelCaseToNormalWords } from "@/lib/helpers";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  additionalButtonLabel?: string;
  onAdditionalButtonAction?: () => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  additionalButtonLabel,
  onAdditionalButtonAction,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex w-full items-center justify-end gap-2 py-4">
        {additionalButtonLabel && <Button onClick={onAdditionalButtonAction}>{additionalButtonLabel}</Button>}
        <Button variant={"outline"}>Export CSV</Button>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"secondary"}
                className={cn(
                  "h-9 rounded-none border border-gray-300 bg-white py-0 text-left font-normal dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                }}>
                <Columns3Icon className={"text-zinc-600 dark:text-zinc-300"} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-[260px] flex-col gap-4 rounded-none p-4" align="end">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="all"
                  checked={
                    table.getIsSomeColumnsVisible() !== table.getIsAllColumnsVisible()
                      ? "indeterminate"
                      : table.getIsAllColumnsVisible()
                  }
                  onCheckedChange={table.getToggleAllColumnsVisibilityHandler()}
                />
                <Label className="dark:text-white" htmlFor="all">
                  ALL
                </Label>
              </div>
              {table.getAllLeafColumns().map((column) => {
                if (column.id === "select") return null;

                return (
                  <div key={column.id} className="flex items-center space-x-2">
                    <Checkbox
                      checked={column?.getIsVisible() ? column?.getIsVisible() : false}
                      onCheckedChange={() => column?.toggleVisibility(!column?.getIsVisible())}
                    />
                    <Label className="dark:text-white">{camelCaseToNormalWords(column.id)} </Label>
                  </div>
                );
              })}
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
