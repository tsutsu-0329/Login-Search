import React from "react";
import { Form } from "../components/Form";

export function AddItemPage() {
  return (
    <>
      <Form theme={"商品追加"} info1={'商品名'} info2={'アイテムコード'} info3={'価格'} info4={'商品説明'}/>
    </>
  );
}
