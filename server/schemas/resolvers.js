const { User, Thought } = require("../models");
const resolvers = {
  Query: {
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);

        return user;
      },
      login: async () => {},
    },
  },
};

module.exports = resolvers;
