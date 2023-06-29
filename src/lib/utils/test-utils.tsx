import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MemoryRouter } from "react-router-dom"

type WrapperOptions = {
  useQueryClient?: boolean;
  useMemoryRouter?: boolean
}

export const createWrapper = ({useQueryClient, useMemoryRouter}: WrapperOptions) => {
  return ({ children }: { children: ReactNode }) => {
    let Component = <>{children}</>;

    if(useQueryClient) {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        }
      });

      Component = <QueryClientProvider client={queryClient}>{Component}</QueryClientProvider>
    }

    if(useMemoryRouter) {
      Component = <MemoryRouter>{Component}</MemoryRouter>
    }

    return Component;
  }
}