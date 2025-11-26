export default function Table({
                                  headers,
                                  children,
                              }: {
    headers: string[];
    children: React.ReactNode;
}) {
    return (
        <div className="overflow-x-auto border border-dark-600 rounded-xl">
            <table className="w-full text-left text-[14px]">
                <thead className="bg-dark-800 border-b border-dark-600">
                <tr>
                    {headers.map((h) => (
                        <th key={h} className="px-4 py-3 text-textc-primary">
                            {h}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>{children}</tbody>
            </table>
        </div>
    );
}
