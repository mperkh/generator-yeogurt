'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var secrets = require('../../config/secrets');
var uuid = require('node-uuid');

/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a <provider> id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

// Sign in with Facebook.
var strategy = function(User) {
    passport.use(new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
        if (req.user) {
            User.find({
                where: {
                    facebook: profile.id
                }
            }).success(function(existingUser) {
                if (existingUser) {
                    req.flash('errors', {
                        msg: 'Your Facebook account is already linked to another account. Sign in with that account below or click on "Forgot you password?" to reset your password.'
                    });
                    done(null);
                } else {
                    User.find({
                        where: {
                            id: req.user.id
                        }
                    }).success(function(user) {
                        user.firstName = user.firstName || profile._json.first_name;
                        user.lastName = user.lastName || profile._json.last_name;
                        user.gender = user.gender || profile._json.gender;
                        user.picture = user.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                        user.facebook = profile.id;
                        user.facebookToken = accessToken;
                        user.save().success(function() {
                            req.flash('info', {
                                msg: 'Facebook account has been linked.'
                            });
                            done(null, user);
                        });
                    }).error(function(err) {
                        if (err) {
                            return done(err);
                        }
                    });
                }
            }).error(function(err) {
                if (err) {
                    return done(err);
                }
            });
        } else {
            User.find({
                where: {
                    facebook: profile.id
                }
            }).success(function(existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }
                User.find({
                    where: {
                        email: profile._json.email
                    }
                }).success(function(existingEmailUser) {
                    if (existingEmailUser) {
                        req.flash('errors', {
                            msg: 'There is already an account using the email "' + existingEmailUser.email + '". If it is your account, sign in below or click on "Forgot you password?" to reset your password.'
                        });
                        done(null);
                    } else {
                        var user = {};
                        user.firstName = profile._json.first_name;
                        user.lastName = profile._json.last_name;
                        user.email = profile._json.email;
                        user.facebook = profile.id;
                        user.facebookToken = accessToken;
                        user.gender = profile._json.gender;
                        user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                        user.location = (profile._json.location) ? profile._json.location.name : '';
                        // Build unique ID to appease passport's serializer
                        user.id = uuid.v1();

                        req.newUser = true;
                        done(null, user);
                    }
                }).error(function(err) {
                    if (err) {
                        return done(err);
                    }
                });
            }).error(function(err) {
                if (err) {
                    return done(err);
                }
            });
        }
    }));
};

module.exports = strategy;
