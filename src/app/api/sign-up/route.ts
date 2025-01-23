import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import bcryptjs from 'bcryptjs';

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { json } from "stream/consumers";

export async function POST(request: Request) {
    await dbConnect()

    try{
        const {username,email,password} = await request.json()
        const existingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified:true
        })
        if(existingUserVerifiedByUsername) {
            return Response.json({
                success:false,
                message:"Username is already taken"
            },{status:400})
        }
        const existingUserByEmail = await UserModel.findOne({email})
        if(existingUserByEmail) {
            
        }
    } catch(error){
        console.error('Error registering User',error);
        return Response.json({
            success: false,
            message:'Error Registering User'
        },{
            status:500
        })
    }
}
