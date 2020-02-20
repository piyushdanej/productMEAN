 function upvotePost(postModel, id) {
    return postModel.findByIdAndUpdate(
        {
            // _id: mongoose.Types.ObjectId(req.params.id)
            _id: id
        },
        {
            $inc:
                { "meta.votes": 1 }
        },
        {
            new: true,
            projection: { "meta.votes": 1 }
        })
}
module.exports = upvotePost;