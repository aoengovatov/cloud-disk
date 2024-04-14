exports.userMapper = (user) => ({
    id: user.id,
    email: user.email,
    diskSpace: user.diskSpace,
    usedSpcace: user.usedSpcace,
    avatar: user.avatar,
});
