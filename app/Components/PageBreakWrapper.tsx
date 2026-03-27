import { type ReactNode } from 'react';

export default function PageBreakWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={`flex flex-row items-center w-full gap-4`}>
      <div className={`w-full bg-(--color-header) p-[0.13em]`}></div>
      <div>{children}</div>
      <div className={`w-full bg-(--color-header) p-[0.13em]`}></div>
    </div>
  );
}
