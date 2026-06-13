const asyncHandler = (requestHandler) => {

    return (req, res, next) => {

        Promise
        .resolve(requestHandler(req, res, next))
        .catch((error)=>{

            console.log("REAL ERROR:");
            console.log(error.stack);

            next(error);

        })

    }

}


export default asyncHandler;