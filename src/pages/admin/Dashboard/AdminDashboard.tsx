import Avatar from "../../../components/common/Avatar";
import Badge from "../../../components/common/Badge";
import Card from "../../../components/common/Card";
import PageTitle from "../../../components/common/PageTitle";
import Table from "../../../components/common/Table";
import { useAdmin } from "../../../context/AdminContext";

export default function AdminDashboard() {
    const { stats, orders, team } = useAdmin();

    const getStatusColor = (status: string) => {
        if (status === "delivered") return "green" as const;
        if (status === "pending") return "gray" as const;
        return "gold" as const;
    };

    return (
        <div className="space-y-6">
            <PageTitle>Operations overview</PageTitle>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.label}>
                        <div className="flex flex-col gap-1">
                            <div className="text-textc-muted text-[13px]">{stat.label}</div>
                            <div className="text-[24px] font-extrabold">{stat.value}</div>
                            {stat.trend ? (
                                <div className="text-[12px] text-gold font-medium">{stat.trend}</div>
                            ) : null}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-[16px] font-bold">Recent orders</h2>
                        <Badge color="gray">Updated live</Badge>
                    </div>
                    <Table headers={["Order", "Customer", "Vehicle", "Status", "Updated"]}>
                        {orders.slice(0, 4).map((order) => (
                            <tr key={order.id} className="border-t border-dark-700">
                                <td className="px-4 py-3 font-semibold">{order.id}</td>
                                <td className="px-4 py-3 text-textc-secondary">{order.customer}</td>
                                <td className="px-4 py-3 text-textc-secondary">{order.vehicle}</td>
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

                <div className="space-y-4 lg:col-span-1">
                    <Card>
                        <h2 className="text-[16px] font-bold mb-4">Team</h2>
                        <div className="space-y-3">
                            {team.map((member) => (
                                <div
                                    key={member.name}
                                    className="flex items-center gap-3 p-3 bg-dark-900 rounded-xl border border-dark-700"
                                >
                                    <Avatar size={42} src={member.avatar} />
                                    <div>
                                        <div className="font-semibold">{member.name}</div>
                                        <div className="text-[13px] text-textc-muted">{member.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-[16px] font-bold mb-2">Compliance reminders</h2>
                        <ul className="list-disc list-inside text-[14px] text-textc-secondary space-y-2">
                            <li>Double-check import approvals for vehicles arriving this week.</li>
                            <li>Ensure all PO invoices are reconciled before Friday.</li>
                            <li>Schedule inspection slots for fresh arrivals.</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}
