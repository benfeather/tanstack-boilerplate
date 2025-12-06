import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { Loader } from "@workspace/client/components/loader";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { orpc, queryClient } from "@workspace/client/utils/orpc";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		context: { orpc, queryClient },
		defaultPendingComponent: () => <Loader />,
		defaultNotFoundComponent: () => <div>Not Found</div>,
		Wrap: ({ children }) => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		),
	});
	return router;
};

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
