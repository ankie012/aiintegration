import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(email:string,username: string,verifyCode:string):Promise<ApiResponse> {
    try{
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Hello world',
            react: VerificationEmail({ username,otp:verifyCode }),
          });
        return {sucess:true, message:"sucess to send verification email"}
    } catch(emailError) {
        console.error('Error sending verification email',emailError);
        return {sucess:false, message:"Failed to send verification email"}
    }
}