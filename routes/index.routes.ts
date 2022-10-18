import express, {Router,Request, Response, NextFunction} from "express"

const router:Router = express.Router()

router.get("/", (req:Request, res:Response, next:NextFunction) => {
  res.status(200).json("all good in here brosky")
});

module.exports = router;
