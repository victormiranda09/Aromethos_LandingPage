import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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