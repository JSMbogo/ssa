import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  reports: defineTable({
    authorId: v.optional(v.string()),
    type: v.string(),
    description: v.string(),
    anonymous: v.boolean(),
    status: v.string(),
    createdAt: v.number(),
  }),
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    role: v.optional(v.union(
      v.literal('admin'),
      v.literal('organization'),
      v.literal('individual'),
      v.literal('compliance')
    )),
  }).index('by_clerkId', ['clerkId']),
})
