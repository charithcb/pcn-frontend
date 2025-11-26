interface PreorderRequest {
    make: string;
    model: string;
    yearRange?: string;
    budget?: string;
    notes?: string;
}

const NETWORK_DELAY = 300;

export const preorderService = {
    async submit(request: PreorderRequest): Promise<{ success: boolean; referenceId: string }> {
        return new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve({
                        success: true,
                        referenceId: `PRE-${Math.floor(Math.random() * 9000 + 1000)}`,
                    }),
                NETWORK_DELAY,
            ),
        );
    },
};
