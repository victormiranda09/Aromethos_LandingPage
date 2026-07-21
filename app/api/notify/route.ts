import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

import { Resend } from "resend";
import ConfirmationEmail from "@/emails/confirmationemail";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
  
    const { error } = await supabase
      .from("subscribers")
      .insert({
        name,
        email,
      });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            message: "✦ Este e-mail já faz parte da lista de espera da Aromethos.",
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          message: "Ocorreu um erro. Tente novamente mais tarde.",
        },
        { status: 500 }
      );
    }

    await resend.emails.send({
        from: "Aromethos <hello@aromethos.com>",
        to: email,
        subject: "✦ Bem-vindo à Aromethos ✦",
        react: ConfirmationEmail({
          name,
        }),
      });

    return NextResponse.json({
      success: true,
      message: "Inscrição realizada com sucesso!",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Erro interno.",
      },
      { status: 500 }
    );
  }
}