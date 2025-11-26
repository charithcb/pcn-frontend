type TabsProps = {
    tabs: string[];
    active: string;
    onChange: (tab: string) => void;
};

export default function Tabs({ tabs, active, onChange }: TabsProps) {
    return (
        <div className="flex gap-4 border-b border-dark-600 px-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`py-3 text-[15px] font-semibold ${
                        active === tab
                            ? "text-gold border-b-2 border-gold"
                            : "text-textc-secondary hover:text-textc-primary"
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
