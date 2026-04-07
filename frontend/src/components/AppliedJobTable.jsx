import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table'

import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-5 overflow-x-auto">

      <Table className="min-w-full">
        <TableCaption className="text-gray-500 text-sm mb-2">
          A list of your applied jobs
        </TableCaption>

        {/* Header */}
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-700">Date</TableHead>
            <TableHead className="font-semibold text-gray-700">Job Role</TableHead>
            <TableHead className="font-semibold text-gray-700">Company</TableHead>
            <TableHead className="font-semibold text-gray-700 text-center">Status</TableHead>
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {[1, 2, 3, 4].map((item, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-50 transition"
            >
              <TableCell className="text-gray-600 text-sm">
                02-04-2025
              </TableCell>

              <TableCell className="font-medium text-gray-800">
                Frontend Developer
              </TableCell>

              <TableCell className="text-gray-600">
                Google
              </TableCell>

              <TableCell className="text-center">
                <Badge
                  className="bg-green-100 text-green-600 hover:bg-green-200 px-3 py-1 text-xs rounded-full"
                >
                  Selected
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}

export default AppliedJobTable