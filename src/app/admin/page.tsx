export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome to the administration area. Select a section from the sidebar to manage content.</p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder cards */}
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-medium">User Management</h3>
                    <p className="mt-2 text-sm text-gray-500">View and manage user roles and permissions.</p>
                </div>
                {/* Add more cards here as we add features */}
            </div>
        </div>
    );
}
