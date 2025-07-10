import React, { useState } from 'react'
import {
BarChart3Icon,
CalendarIcon,
GlobeIcon,
LandmarkIcon,
MoreHorizontalIcon,
PlaneTakeoffIcon,
SearchIcon,
UserIcon,
UsersIcon,
} from 'lucide-react'
// Material UI imports
import {
Button,
Card,
CardContent,
Avatar,
IconButton,
TextField,
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
Chip,
Paper,
Tooltip,
Divider,
Box,
Typography
} from '@mui/material'
export function AdminDashboard() {
const [searchQuery, setSearchQuery] = useState('')
return (
<div className="flex w-full flex-col">
  {/* Header */}
  <Paper elevation={2} className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
    <div className="flex items-center gap-2">
      <GlobeIcon className="h-6 w-6 text-blue-600" />
      <Typography variant="h6" className="font-bold text-gray-900">
        TravelAdmin Dashboard
      </Typography>
    </div>
    <div className="relative">
      <TextField size="small" placeholder="Search bookings, destinations..." variant="outlined" value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        className="rounded-full"
        InputProps={{
        startAdornment:
        <SearchIcon className="mr-2 h-4 w-4 text-gray-400" />,
        }}
        />
    </div>
    <div className="flex items-center gap-4">
      <IconButton className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
        <CalendarIcon className="h-5 w-5" />
      </IconButton>
      <div className="flex items-center gap-2">
        <Avatar className="bg-blue-600">
          <UserIcon className="h-5 w-5" />
        </Avatar>
        <span className="text-sm font-medium">Admin User</span>
      </div>
    </div>
  </Paper>
  {/* Main content */}
  <main className="flex-1 bg-gray-50 p-6">
    {/* Stats overview */}
    <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Total Bookings" value="2,543" change="+12.5%" icon={<CalendarIcon
        className="h-6 w-6 text-blue-600" />}
      />
      <StatCard title="Revenue" value="$152,250" change="+8.2%" icon={<LandmarkIcon
        className="h-6 w-6 text-green-600" />}
      />
      <StatCard title="Active Users" value="12,345" change="+24.3%" icon={<UsersIcon
        className="h-6 w-6 text-purple-600" />}
      />
      <StatCard title="Popular Destinations" value="243" change="+3.7%" icon={<PlaneTakeoffIcon
        className="h-6 w-6 text-orange-600" />}
      />
    </div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Recent bookings */}
      <Paper elevation={2} className="col-span-2 rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h6" className="font-bold text-gray-900">
            Recent Bookings
          </Typography>
          <Button variant="text" color="primary" size="small"
            className="text-sm font-medium text-blue-600 hover:text-blue-500">
            View all
          </Button>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <BookingRow customer="Emma Thompson" destination="Bali, Indonesia" date="Oct 24, 2023" amount="$1,250"
                status="Confirmed" />
              <BookingRow customer="James Wilson" destination="Paris, France" date="Oct 22, 2023" amount="$980"
                status="Pending" />
              <BookingRow customer="Sofia Garcia" destination="Tokyo, Japan" date="Oct 20, 2023" amount="$1,750"
                status="Confirmed" />
              <BookingRow customer="Michael Brown" destination="Cairo, Egypt" date="Oct 18, 2023" amount="$1,100"
                status="Cancelled" />
              <BookingRow customer="Olivia Johnson" destination="Sydney, Australia" date="Oct 15, 2023" amount="$2,200"
                status="Confirmed" />
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* Analytics panel */}
      <Paper elevation={2} className="rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h6" className="font-bold text-gray-900">
            Analytics
          </Typography>
          <Button variant="text" color="primary" size="small"
            className="text-sm font-medium text-blue-600 hover:text-blue-500">
            Full report
          </Button>
        </div>
        <Box className="mb-6">
          <Typography variant="subtitle2" className="mb-2 text-gray-500">
            Top Destinations
          </Typography>
          <div className="space-y-2">
            <ProgressBar label="Bali, Indonesia" percentage={75} color="primary" />
            <ProgressBar label="Paris, France" percentage={62} color="success" />
            <ProgressBar label="Tokyo, Japan" percentage={58} color="secondary" />
            <ProgressBar label="New York, USA" percentage={45} color="warning" />
            <ProgressBar label="Rome, Italy" percentage={38} color="error" />
          </div>
        </Box>
        <Divider className="my-4" />
        <Box>
          <Typography variant="subtitle2" className="mb-4 text-gray-500">
            Booking Trends
          </Typography>
          <div className="flex h-40 items-end justify-between space-x-2">
            <ChartBar height="60%" label="Mon" />
            <ChartBar height="45%" label="Tue" />
            <ChartBar height="75%" label="Wed" />
            <ChartBar height="90%" label="Thu" />
            <ChartBar height="65%" label="Fri" />
            <ChartBar height="40%" label="Sat" />
            <ChartBar height="55%" label="Sun" />
          </div>
        </Box>
      </Paper>
    </div>
    {/* Quick actions */}
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <QuickActionCard title="Add New Package" description="Create a new travel package" icon={<PlaneTakeoffIcon
        className="h-6 w-6" />}
      color="primary"
      />
      <QuickActionCard title="Manage Bookings" description="View and edit customer bookings" icon={<CalendarIcon
        className="h-6 w-6" />}
      color="success"
      />
      <QuickActionCard title="User Management" description="Manage customer accounts" icon={<UsersIcon
        className="h-6 w-6" />}
      color="secondary"
      />
      <QuickActionCard title="View Reports" description="Access detailed analytics" icon={<BarChart3Icon
        className="h-6 w-6" />}
      color="warning"
      />
    </div>
  </main>
</div>
)
}
// Supporting components
function StatCard({ title, value, change, icon }) {
const isPositive = change.startsWith('+')
return (
<Card elevation={2} className="rounded-lg bg-white p-6">
  <CardContent className="p-0">
    <div className="flex items-center justify-between">
      <div>
        <Typography variant="body2" color="textSecondary" className="text-sm font-medium">
          {title}
        </Typography>
        <Typography variant="h5" className="mt-1 text-2xl font-semibold text-gray-900">
          {value}
        </Typography>
      </div>
      <Avatar className="bg-blue-50 p-3">
        {icon}
      </Avatar>
    </div>
    <Typography variant="body2" className={`mt-2 inline-flex items-center text-sm ${isPositive ? 'text-green-600'
      : 'text-red-600' }`}>
      <span>{change}</span>
      <span className="ml-1">from last month</span>
    </Typography>
  </CardContent>
</Card>
)
}
function BookingRow({ customer, destination, date, amount, status }) {
let chipColor = 'default'
if (status === 'Confirmed') chipColor = 'success'
if (status === 'Pending') chipColor = 'warning'
if (status === 'Cancelled') chipColor = 'error'
return (
<TableRow>
  <TableCell>{customer}</TableCell>
  <TableCell>{destination}</TableCell>
  <TableCell>{date}</TableCell>
  <TableCell>{amount}</TableCell>
  <TableCell>
    <Chip label={status} color={chipColor} size="small" variant="outlined" />
  </TableCell>
  <TableCell align="right">
    <Tooltip title="More options">
      <IconButton size="small">
        <MoreHorizontalIcon className="h-4 w-4 text-gray-400" />
      </IconButton>
    </Tooltip>
  </TableCell>
</TableRow>
)
}
function ProgressBar({ label, percentage, color }) {
return (
<div>
  <div className="mb-1 flex items-center justify-between">
    <Typography variant="caption" className="text-xs font-medium text-gray-700">
      {label}
    </Typography>
    <Typography variant="caption" className="text-xs font-medium text-gray-700">
      {percentage}%
    </Typography>
  </div>
  <Box className="h-2 w-full rounded-full bg-gray-200" sx={{ position: 'relative' }}>
    <Box className={`h-2 rounded-full`} sx={{ width: `${percentage}%`, bgcolor: `${color}.main` }}></Box>
  </Box>
</div>
)
}
function ChartBar({ height, label }) {
return (
<div className="flex flex-col items-center">
  <Box className="w-8 rounded-t" sx={{ height, bgcolor: 'primary.main' }}></Box>
  <Typography variant="caption" className="mt-1 text-xs text-gray-500">
    {label}
  </Typography>
</div>
)
}
function QuickActionCard({ title, description, icon, color }) {
return (
<Card elevation={2} className="flex items-center rounded-lg bg-white p-6 transition-all hover:shadow-md" sx={{
  cursor: 'pointer' }}>
  <Avatar className="mr-4 p-2" sx={{ bgcolor: `${color}.main` }}>
    {icon}
  </Avatar>
  <div className="text-left">
    <Typography variant="subtitle1" className="font-medium text-gray-900">
      {title}
    </Typography>
    <Typography variant="body2" color="textSecondary" className="text-sm">
      {description}
    </Typography>
  </div>
</Card>
)
}