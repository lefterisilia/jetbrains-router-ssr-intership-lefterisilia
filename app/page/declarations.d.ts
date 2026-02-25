// This tells TypeScript: "Treat these imports as valid JS modules"
declare module '@jetbrains/kotlin-web-site-ui/dist/header.js' {
    const GlobalHeader: any;
    export default GlobalHeader;
}

declare module '@jetbrains/kotlin-web-site-ui/dist/header.css';
declare module '@jetbrains/kotlin-web-site-ui/dist/footer.js' {
    const GlobalFooter: any;
    export default GlobalFooter;
}
declare module '@jetbrains/kotlin-web-site-ui/dist/footer.css';

// UI Contexts (if the library doesn't provide types)
declare module '@rescui/ui-contexts';
declare module 'react-dom/client';
// This tells TS that ANY path inside this package is a valid module
declare module "@jetbrains/kotlin-web-site-ui/*" {
    const content: any;
    export default content;
}

// Also handle the CSS specifically just in case
declare module "@jetbrains/kotlin-web-site-ui/dist/*.css";
