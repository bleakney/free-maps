const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            if (!user) {
                throw new AuthenticationError
                    (' credentials');
            }
            return { token, user };
        },
        login: async (parents, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError
                    ('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { authors, description, title, bookId, image, link }, context) => {


            if (context.user) {
                const userInfo = { authors, description, title, bookId, image, link }

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: userInfo } },
                    { new: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')


        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                )

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        }
    }
}
module.exports = resolvers;
