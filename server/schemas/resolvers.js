const { AuthenticationError } = require('apollo-server-express');
const { User, Items } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
            .select("-__v -password")
            .populate("savedItems")
            .populate("postedItems");
        },
        items: async (parent, { title }) => {
            const params = title ? { title } : {};
            return Item.find(params).sort({ createdAt: -1 })
        },
        item: async (parent, { _id }) => {
            return Item.findOne({ _id });
        }
        // item: async (parent, args, context) => {
        //     if (context.item) {
        //         const itemData = await Item.findOne({_id: context.user.title})
        //         return itemData
        //     }
        // },
        // location: async (parent, args, context) => {
        //     if (context.location) {
        //         const locationData = await User.findOne({location: context.user.location})
        //         return locationData
        //     }
        // }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
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
    
    
    saveItems: async (parent, { input }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: {savedItems: input} },
                { new: true } 
            ).populate("savedItems")
            return updatedUser;       }
        throw new AuthenticationError('You need to be logged in!')
    }}
}
module.exports = resolvers;
