const Mutations = {
  async createItem(parent, args, ctx, info) {
    //check login

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  }
};

module.exports = Mutations;
