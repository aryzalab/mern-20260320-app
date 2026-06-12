"use client";

import usePreferenceStore from "@/stores/preferenceStore";

const MainLayout = ({ children }) => {
  const { theme } = usePreferenceStore.getState();

  return <div className={theme}>{children}</div>;
};

export default MainLayout;
