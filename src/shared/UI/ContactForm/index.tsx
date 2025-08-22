import Modal from "../Modal";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = (props: ContactFormProps) => {
  return (
    <Modal heading="Contact" open={props.isOpen} onClose={props.onClose} hideBorder>
      <div className={"flex items-center justify-end py-4 gap-3 px-6 bg-background rounded-md border-t-grey-40 "}></div>
    </Modal>
  );
};

export default ContactForm;
