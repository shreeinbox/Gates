const authenticateUser = (req, res) =>{
    throw new Error('Error authenticating user!!')
    res.status(200).json({message : 'Authentication is done!'})
}

const registerUser = (req, res) => {
    res.status(200).json({message : 'Registering a user'})
}

const logoutUser = (req, res) => {
    res.status(200).json({message : 'Logging out a user'})
}

const getUserProfile = (req, res) => {
    res.status(200).json({message : 'Getting user Profile'})
}

const updateUserProfile = (req, res) => {
    res.status(200).json({message : 'Updating user Profile'})
}

export { authenticateUser, registerUser, logoutUser, getUserProfile, updateUserProfile};