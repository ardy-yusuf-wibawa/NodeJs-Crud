exports.updateUser = (req, res, next) => {
    const userId = req.params.id; 
    const newUserData = req.body; 
  

    res.send({ message: `User ${userId} updated successfully` });
    console.log('ini userID :',userId);
  };