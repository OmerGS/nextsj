export function nextsj(): void;
export function startServer(port?: number): void;
export function createPage(name: string): void;
export function useRouter(): {
  push: (path: string) => void;
  replace: (path: string) => void;
  prefetch: (path: string) => void;
};
export function build(): void;
export function exportApp(): void;
export function getStaticProps(): Record<string, unknown>;