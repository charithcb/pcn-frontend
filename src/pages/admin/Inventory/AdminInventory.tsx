import Badge from "../../../components/common/Badge";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import Divider from "../../../components/common/Divider";
import PageTitle from "../../../components/common/PageTitle";
import Table from "../../../components/common/Table";
import { useAdmin } from "../../../context/AdminContext";

export default function AdminInventory() {
    const { inventory } = useAdmin();

    const getStatusColor = (status: string) => {
        if (status === "available") return "green" as const;
        if (status === "reserved") return "gold" as const;
        return "gray" as const;
    };

    return (
        <div className="space-y-6">
            <PageTitle>Inventory</PageTitle>

            <div className="grid gap-4 lg:grid-cols-3">
                <Card>
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <p className="text-textc-muted text-[13px]">On-hand stock</p>
                            <p className="text-[26px] font-extrabold">{inventory.reduce((sum, item) => sum + item.stock, 0)}</p>
                        </div>
                        <Badge color="green">+4 arrivals</Badge>
                    </div>
                    <p className="text-textc-secondary text-[14px]">
                        Monitor what's ready to show customers and what's en route.
                    </p>
                </Card>

                <Card>
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <p className="text-textc-muted text-[13px]">Reserved units</p>
                            <p className="text-[26px] font-extrabold">
                                {inventory.filter((item) => item.status === "reserved").reduce((sum, item) => sum + item.stock, 0)}
                            </p>
                        </div>
                        <Badge color="gold">Hold</Badge>
                    </div>
                    <p className="text-textc-secondary text-[14px]">
                        Keep customers updated on when their reserved vehicles will be ready for pickup.
                    </p>
                </Card>

                <Card>
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <p className="text-textc-muted text-[13px]">In transit</p>
                            <p className="text-[26px] font-extrabold">
                                {inventory.filter((item) => item.status === "in-transit").length}
                            </p>
                        </div>
                        <Badge color="gray">ETA updates</Badge>
                    </div>
                    <p className="text-textc-secondary text-[14px]">
                        Validate shipping timelines and customs clearance before promising delivery windows.
                    </p>
                </Card>
            </div>

            <Card>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div>
                        <h2 className="text-[18px] font-bold">Vehicle stock</h2>
                        <p className="text-textc-secondary text-[14px]">A quick snapshot of current stock and expected arrivals.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="secondary">Import list</Button>
                        <Button>Add vehicle</Button>
                    </div>
                </div>

                <Divider />

                <Table headers={["ID", "Model", "Stock", "Status", "ETA"]}>
                    {inventory.map((item) => (
                        <tr key={item.id} className="border-t border-dark-700 hover:bg-dark-800/50">
                            <td className="px-4 py-3 font-semibold">{item.id}</td>
                            <td className="px-4 py-3 text-textc-secondary">{item.model}</td>
                            <td className="px-4 py-3">{item.stock}</td>
                            <td className="px-4 py-3">
                                <Badge color={getStatusColor(item.status)}>
                                    {item.status === "in-transit" ? "In transit" : item.status}
                                </Badge>
                            </td>
                            <td className="px-4 py-3 text-textc-muted">{item.eta || "Ready"}</td>
                        </tr>
                    ))}
                </Table>
            </Card>
        </div>
    );
}
