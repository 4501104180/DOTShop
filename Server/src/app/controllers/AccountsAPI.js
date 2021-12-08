const bcrypt = require('bcrypt');
const { generateToken } = require('../../utils/jwt');
const Account = require('../models/Account');
const mongoose = require('mongoose');
class AccountsAPI {
    // [GET] /accounts/checkExist/:email
    async checkExist(req, res) {
        try {
            const { email } = req.params;
            const accountExisted = await Account.findOne({ email: email });
            res.json({ exist: accountExisted ? true : false });
        } catch (error) {
            console.log(error);
        }
    };

    // [GET] /accounts
    async findAll(req, res) {
        try {
            const accounts = await Account
                .find({});
            res.json(accounts);
        } catch (error) {
            console.log(error);
        }
    };

    // [GET] /accounts/profile
    async getProfile(req, res) {
        const account = await Account
            .findOne({ _id: req.user._id });
        const { password, ...user } = account.toObject();
        res.json(user);
    };

    // [POST] /accounts/login
    async login(req, res) {
        const areFilled = Object.values(req.body).every(field => field !== '');
        if (!areFilled) {
            res.statusMessage = 'Fill all the fields, please!';
            res.status(400).end();
            return;
        }
        try {
            const account = await Account.findOne({ email: req.body.email });
            if (!account) {
                res.statusMessage = 'Wrong email or password!';
                res.status(400).end();
                return;
            }
            const isRightPassword = await bcrypt.compare(req.body.password, account.password);
            if (!isRightPassword) {
                res.statusMessage = 'Wrong email or password!';
                res.status(400).end();
                return;
            }
            const { _id } = account;
            const tokens = generateToken({ _id });
            account.refreshToken = tokens.refreshToken;
            await account.save();
            res.json(tokens);
        } catch (error) {
            console.log(error);
        };
    };

    // [POST] /accounts/register
    async register(req, res) {
        const areFilled = Object.values(req.body).every(field => field !== '');
        if (!areFilled) {
            res.statusMessage = 'Fill all the fields, please!';
            res.status(400).end();
            return;
        }
        try {
            const { email, password, passwordConfirm } = req.body;
            const accountExisted = await Account.findOne({ email: email });
            if (accountExisted) {
                res.statusMessage = 'This account already exists!';
                res.status(400).end();
                return;
            }
            if (password !== passwordConfirm) {
                res.statusMessage = 'Passwords are not synchronous!';
                res.status(400).end();
                return;
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const account = new Account({
                ...req.body,
                password: hashedPassword
            });
            await account.save();
            res.json({
                message: 'Register successfully!'
            });
        } catch (error) {
            console.log(error);
        };
    };
    // [POST] /accounts
    async insert(req, res) {
        try {
            const { email, password } = req.body;
            const accountExisted = await Account.findOne({ email: email });
            if (accountExisted) {
                res.statusMessage = 'This account already exists!';
                res.status(400).end();
                return;
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const account = new Account({
                ...req.body,
                password: hashedPassword,
                image: req.file.originalname
            })
            await account.save();
            res.json({
                message: 'Insert successfully!',
                account
            });
        } catch (error) {
            console.log(error);
        };
    };
    // [PUT] /accounts/:accountID
    async edit(req, res) {
        try {
            const { password } = req.body;
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const { accountID } = req.params;
            const result = await Account.findByIdAndUpdate(accountID, {
                ...req.body,
                password: hashedPassword,
                image: req.file.originalname
            })
            res.json(result);
        } catch (error) {
            console.log(error);
        };
    };
    // [DELETE] /accounts/:accountID
    async deletebyID(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { accountID } = req.params;
            const result = await Account
            .delete({ _id: accountID }, deletor );
                res.json({
                    ...result,
                    accountID
                });
        } catch (error) {
            console.log(error);
        };
    };

    // [DELETE] /accounts/
    async deletedAll(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { accounts } = req.body;
            const result = await Account
            .delete({ _id: { $in: accounts }}, deletor );
                res.json({
                    ...result,
                    accounts
                });
        } catch (error) {
            console.log(error);
        };
    };

    // [POST] /accounts/refreshToken
    async refreshToken(req, res) {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) return res.sendStatus(401);
            const account = await Account
                .findOne({
                    refreshToken
                });
            if (!account) return res.sendStatus(403);
            const { _id } = account;
            const tokens = generateToken({ _id });
            account.refreshToken = tokens.refreshToken;
            await account.save();
            res.json(tokens);
        } catch (error) {
            console.log(error);
        }
    };
};

module.exports = new AccountsAPI;
