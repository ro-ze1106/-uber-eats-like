import React from "react";

import { DialogContent, Dialog, DialogTitle } from "@mui/material";
import { OrderButton } from "./Buttons/OrderButton";

export const NewOrderConfirmDialog = ({
  isOpen,
  onClose,
  existingResutaurantName,
  newResutaurantName,
  onClickSubmit,
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    maxWidth="xs"
  >
    <DialogTitle>
      新規注文を開始しますか？
    </DialogTitle>
    <DialogContent>
      <p>
        {`ご注文に${existingResutaurantName}の商品が含まれています。
        新規の注文を開始して${newResutaurantName}の商品を追加してください。`}
      </p>
      {/*先ほど作ったOrderButtonをここで使用*/}
      <OrderButton onClick={onClickSubmit}>
        新規注文
      </OrderButton>
    </DialogContent>
  </Dialog>
);