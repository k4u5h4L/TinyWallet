import { CapacitorConfig } from "@capacitor/cli";
import internalIp from "internal-ip";

const config: CapacitorConfig = {
    appId: "com.tinywallet.app",
    appName: "tinywallet",
    webDir: "out",
    bundledWebRuntime: false,
    server: {
        url: `http://${internalIp.v4.sync()}:3000`,
    },
};

export default config;
