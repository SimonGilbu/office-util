"use client";
import Script from "next/script";
import { useState } from "react";
export default function OfficeLoader({ children, }: Readonly<{ children: React.ReactNode; }>) {
    let pushStateRef: any;
    let replaceStateRef: any;
    if (typeof window !== "undefined") {
        pushStateRef = window.history.pushState;
        replaceStateRef = window.history.replaceState;
    }
    const [officeLoaded, setOfficeLoaded] = useState(false);
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js"
                onLoad={() => {
                    Office.onReady(() => {
                        setOfficeLoaded(true);
                        if (pushStateRef) { window.history.pushState = pushStateRef; }
                        if (replaceStateRef) { window.history.replaceState = replaceStateRef; }
                    });
                }}
                onError={(e) => {
                    console.error("Script failed to load", e);
                }}
            />
            {officeLoaded ? children : null}
        </>
    );
}