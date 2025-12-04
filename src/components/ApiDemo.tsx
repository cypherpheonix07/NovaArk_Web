import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchMessage(): Promise<{ message: string; time: string }> {
  const res = await fetch('/api/message', {
    headers: {
      'X-API-Key': 'syntha-forge-secret-key-2024',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export default function ApiDemo() {
  const { data, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['api', 'message'],
    queryFn: fetchMessage,
    staleTime: 10_000,
    gcTime: 60_000,
    retry: 1,
  });

  return (
    <div className="p-6 bg-white/70 dark:bg-slate-900/60 rounded-lg shadow-md border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">API demo</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="px-3 py-1 rounded bg-primary text-white hover:opacity-90"
            disabled={isFetching}
          >
            {isFetching ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      <div className="mt-4">
        {isLoading ? (
          <div className="text-sm text-muted-foreground">Loading...</div>
        ) : error ? (
          <div className="text-sm text-red-600">Error: {(error as Error).message}</div>
        ) : data ? (
          <div className="text-sm">
            <div className="font-medium text-green-700">{data.message}</div>
            <div className="text-xs text-muted-foreground mt-1">{new Date(data.time).toLocaleString()}</div>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">No data yet. Click Refresh.</div>
        )}
      </div>
    </div>
  );
}
