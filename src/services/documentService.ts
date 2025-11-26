interface DocumentItem {
    id: string;
    name: string;
    url: string;
}

const NETWORK_DELAY = 150;

const mockDocuments: DocumentItem[] = [
    { id: "doc-001", name: "Import agreement", url: "https://example.com/documents/import-agreement.pdf" },
    { id: "doc-002", name: "Invoice", url: "https://example.com/documents/invoice.pdf" },
];

export const documentService = {
    async list(): Promise<DocumentItem[]> {
        return new Promise((resolve) => setTimeout(() => resolve(mockDocuments), NETWORK_DELAY));
    },
};
