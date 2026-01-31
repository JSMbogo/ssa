import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'

export const Route = createFileRoute('/dashboard/compliance/')({
    component: ComplianceDashboard,
})

function ComplianceDashboard() {
    const user = useQuery(api.users.viewer)

    if (user === undefined) {
        return <div className="p-8">Loading...</div>
    }

    if (user === null || user.role !== 'compliance') {
        return <div className="p-8 text-red-500">Unauthorized: Compliance Officer access required.</div>
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Compliance Officer Dashboard</h1>
            <p>Welcome, {user.name}!</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Report Review</h3>
                    <p className="text-gray-600">Review pending incident reports.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Compliance Audits</h3>
                    <p className="text-gray-600">Conduct and manage compliance audits.</p>
                </div>
            </div>
        </div>
    )
}
