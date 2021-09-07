import React from "react";

import Preloader from "@/components/Preloader";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Preloader />
            <Sidebar />

            <main className="h-100">
                <Header />
                <Dashboard />
            </main>

            <Footer />
        </>
    );
}
