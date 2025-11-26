import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({
                                          open,
                                          onClose,
                                          onConfirm,
                                          title = "Are you sure?",
                                          text = "This action cannot be undone.",
                                      }: {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    text?: string;
}) {
    return (
        <Modal open={open} onClose={onClose}>
            <h2 className="text-[18px] font-semibold mb-2">{title}</h2>
            <p className="text-[14px] text-textc-secondary mb-4">{text}</p>

            <div className="flex gap-2">
                <Button onClick={onConfirm}>Confirm</Button>

                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
}
