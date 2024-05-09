import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import styles from "./styles.module.css";
import { ImageType } from "@/types";

export const ImageModal = ({ image }: { image: ImageType }) => (
  <Dialog.Portal>
    <Dialog.Overlay className={styles.DialogOverlay} />
    <Dialog.Content className={styles.DialogContent}>
      <Image src={image.previewUrl} alt={image.alt} width={600} height={600} />
    </Dialog.Content>
  </Dialog.Portal>
);
