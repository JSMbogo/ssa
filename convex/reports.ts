import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('reports')
      .withIndex('by_creation_time')
      .order('desc')
      .collect()
  },
})

export const create = mutation({
  args: {
    type: v.string(),
    description: v.string(),
    anonymous: v.boolean(),
    authorId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('reports', {
      type: args.type,
      description: args.description,
      anonymous: args.anonymous,
      authorId: args.authorId,
      status: 'pending',
      createdAt: Date.now(),
    })
  },
})

export const updateStatus = mutation({
  args: {
    id: v.id('reports'),
    status: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      status: args.status,
    })
  },
})
