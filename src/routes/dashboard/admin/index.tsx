import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'

export const Route = createFileRoute('/dashboard/admin/')({
    component: AdminDashboard,
})

function AdminDashboard() {
    const user = useQuery(api.users.viewer)

    if (user === undefined) {
        return <div className="p-8">Loading...</div>
    }

    if (user === null || user.role !== 'admin') {
        return <div className="p-8 text-red-500">Unauthorized: Admin access required.</div>
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p>Welcome, {user.name}!</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">User Management</h3>
                    <p className="text-gray-600">Manage user roles and permissions.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">System Logs</h3>
                    <p className="text-gray-600">View system activity and audit logs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Settings</h3>
                    <p className="text-gray-600">Configure global application settings.</p>
                </div>
            </div>
        </div>
    )
}
