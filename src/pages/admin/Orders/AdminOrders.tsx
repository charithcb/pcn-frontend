import Badge from "../../../components/common/Badge";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import Divider from "../../../components/common/Divider";
import PageTitle from "../../../components/common/PageTitle";
import Table from "../../../components/common/Table";
import { useAdmin } from "../../../context/AdminContext";

export default function AdminOrders() {
    const { orders } = useAdmin();

    const getStatusColor = (status: string) => {
        if (status === "delivered") return "green" as const;
        if (status === "pending") return "gray" as const;
        return "gold" as const;
    };

    return (
        <div className="space-y-6">
            <PageTitle>Orders</PageTitle>

            <Card>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div>
                        <h2 className="text-[18px] font-bold">Purchase orders</h2>
                        <p className="text-textc-secondary text-[14px]">Track the latest preorder statuses and payments.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="secondary">Export CSV</Button>
                        <Button>Create order</Button>
                    </div>
                </div>

                <Divider />

                <Table headers={["Order", "Customer", "Vehicle", "Total", "Status", "Updated"]}>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-t border-dark-700 hover:bg-dark-800/50">
                            <td className="px-4 py-3 font-semibold">{order.id}</td>
                            <td className="px-4 py-3 text-textc-secondary">{order.customer}</td>
                            <td className="px-4 py-3 text-textc-secondary">{order.vehicle}</td>
                            <td className="px-4 py-3">{order.total}</td>
                            <td className="px-4 py-3">
                                <Badge color={getStatusColor(order.status)}>
                                    {order.status === "in-progress" ? "In progress" : order.status}
                                </Badge>
                            </td>
                            <td className="px-4 py-3 text-textc-muted">{order.updatedAt}</td>
                        </tr>
                    ))}
                </Table>
            </Card>
        </div>
    );
}
