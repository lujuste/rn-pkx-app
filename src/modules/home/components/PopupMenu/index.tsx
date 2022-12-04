import React from "react";
import { TouchCustom } from "./styles";
import { Modal, SafeAreaView } from "react-native";

// import { Container } from './styles';

interface PopMenuProps {
  children: React.ReactNode;
  visible?: boolean;
}

const PopupMenu: React.FC<PopMenuProps> = ({ children, visible }) => {
  return (
    <>
      <TouchCustom>{children}</TouchCustom>;
      <Modal transparent visible={visible}>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "red" }}
        ></SafeAreaView>
      </Modal>
    </>
  );
};

export default PopupMenu;
