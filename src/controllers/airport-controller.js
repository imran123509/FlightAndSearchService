const {AirportService}=require('../services/index');
const airportService=AirportService();
const create=async (req,res)=>{
     try {
        const response=await airportService.create(req.body);
        return res.status(201).json({
            message: 'Successfully create the airport',
            err:{},
            data:response,
            success:true
        })
     } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'Cannot Create new Airport'
        })
     }
}

module.exports={
    create
}
 