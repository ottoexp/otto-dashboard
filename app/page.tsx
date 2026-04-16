import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { title: "Total Revenue", value: "$45,231", change: "+20.1%", up: true },
  { title: "Active Users", value: "2,350", change: "+15.3%", up: true },
  { title: "New Orders", value: "1,247", change: "+8.2%", up: true },
  { title: "Pending", value: "43", change: "-4.5%", up: false },
];

const orders = [
  { id: "#ORD-001", customer: "Alice Johnson", amount: "$240.00", status: "Completed" },
  { id: "#ORD-002", customer: "Bob Smith", amount: "$180.50", status: "Processing" },
  { id: "#ORD-003", customer: "Carol White", amount: "$95.00", status: "Pending" },
  { id: "#ORD-004", customer: "David Lee", amount: "$320.00", status: "Completed" },
  { id: "#ORD-005", customer: "Eva Brown", amount: "$145.75", status: "Processing" },
];

const statusColor: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Completed: "default",
  Processing: "secondary",
  Pending: "outline",
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r flex flex-col gap-1 px-3 py-6">
        <div className="px-3 mb-6">
          <span className="text-lg font-bold tracking-tight">Otto Dashboard</span>
        </div>
        {["Overview", "Orders", "Products", "Customers", "Analytics", "Settings"].map((item) => (
          <button
            key={item}
            className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
              item === "Overview"
                ? "bg-gray-100 font-medium text-gray-900"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Overview</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back, Admin</p>
          </div>
          <Avatar>
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs mt-1 ${stat.up ? "text-green-600" : "text-red-500"}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Badge variant={statusColor[order.status]}>{order.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
