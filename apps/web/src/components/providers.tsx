'use client'

import { TanStackDevtools } from '@tanstack/react-devtools'
import { FormDevtoolsPanel } from '@tanstack/react-form-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { Toaster } from '@workspace/client/components/sonner'
import { queryClient } from '@/lib/orpc-client'
import { ThemeProvider } from './theme-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {children}

        <TanStackDevtools
          plugins={[
            {
              name: 'TanStack Query',
              render: <ReactQueryDevtoolsPanel />,
              defaultOpen: true,
            },
            {
              name: 'TanStack Form',
              render: <FormDevtoolsPanel />,
              defaultOpen: false,
            },
          ]}
        />
      </QueryClientProvider>

      <Toaster richColors />
    </ThemeProvider>
  )
}
