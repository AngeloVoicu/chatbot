import React from 'react';
import { createRoot } from "react-dom/client";
import { NavigationProvider } from "./components/common/context/navigation";
import App from './App';

import "../src/assets//styles/styles.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const el = document.getElementById('root');
const root = createRoot(el);
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);

