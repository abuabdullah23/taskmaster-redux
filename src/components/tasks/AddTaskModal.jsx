import Modal from "../ui/Modal/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Programming Hero'}>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    you an email with all of the details of your order.
                </p>
            </div>
        </Modal>
    );
};

export default AddTaskModal;