import { Outlet } from "react-router-dom";
import { Header } from "../UI/Header";
import { FooterInfo } from "../UI/FooterInfo";

export const AppLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <FooterInfo />
        </>
    );
};